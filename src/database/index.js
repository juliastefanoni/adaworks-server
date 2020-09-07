  
import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Women from '../app/models/Women';
import Factory from '../app/models/Factory';
import Jobs from '../app/models/Jobs';

const models = [Women, Factory, Jobs];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
    .map( model => model.init(this.connection))

    models.map( model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database;