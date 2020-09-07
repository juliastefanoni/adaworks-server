const { DataTypes, Model} = require('sequelize');
const bcrypt = require('bcryptjs');

class Women extends Model{
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      description: DataTypes.STRING,
      cpf: DataTypes.INTEGER,
      linkForLinkedin: DataTypes.STRING,
      experiences: DataTypes.ARRAY(DataTypes.JSONB),
      agreeToTerms: DataTypes.BOOLEAN,
      apply: DataTypes.BOOLEAN
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

module.exports = Women;