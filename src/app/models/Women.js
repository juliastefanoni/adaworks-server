import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Women extends Model{
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      nickname: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      description: Sequelize.STRING,
      cpf: Sequelize.INTEGER,
      linkForLinkedin: Sequelize.STRING,
      experiences: Sequelize.ARRAY(Sequelize.JSONB),
      agreeToTerms: Sequelize.BOOLEAN,
      apply: Sequelize.BOOLEAN
    },
    {
      sequelize,
      tableName: 'women',
    }
  );

    this.addHook('beforeSave', async (women) => {
      if (women.password) {
        women.password_hash = await bcrypt.hash(women.password, 8);
      }
    });

    return this;
  }
  
  checkPassword(password){
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Women;