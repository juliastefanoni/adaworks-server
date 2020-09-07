import Sequelize, { Model } from 'sequelize';

class Jobs extends Model{
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      localization: Sequelize.STRING,
      role: Sequelize.STRING,
      remuneration: Sequelize.FLOAT,
      experience: Sequelize.STRING,
      occupationArea: Sequelize.STRING,
    },
    {
      sequelize,
      tableName: 'jobs',
    });
  }

  static associate(models) {
    this.belongsTo(models.Factory, { foreignKey: 'factory_id'});
  }
}

export default Jobs;