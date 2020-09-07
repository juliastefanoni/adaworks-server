import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Factory extends Model{
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      nickname: Sequelize.STRING,
      role: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      cnpj: Sequelize.INTEGER,
      factoryName: Sequelize.STRING,
      occupationArea: Sequelize.STRING,
      description: Sequelize.STRING,
      companyPolices: Sequelize.ARRAY(Sequelize.JSONB),
      linkForLinkedin: Sequelize.STRING,
      agreeToTerms: Sequelize.BOOLEAN,
      authorization: Sequelize.BOOLEAN,
      hire: Sequelize.BOOLEAN
    },
    {
      sequelize,
      tableName: 'factory',
    }
  );

    this.addHook('beforeSave', async (factory) => {
      if (factory.password) {
        factory.password_hash = await bcrypt.hash(factory.password, 8);
      }
    });

    return this;
  }

  checkPassword(password){
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Factory;