  
const { Sequelize } = require('sequelize');

const databaseConfig = require('../config/database');

const Women = require('../app/models/Women');
const Factory = require('../app/models/Factory');
const Jobs = require('../app/models/Jobs');

const database = process.env.DATABASE_URL;

let connection = '';

if (process.env.DATABASE_URL) {
  connection = new Sequelize(database, {
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      freezeTableName: true,
    }
  });
} else {
  connection = new Sequelize(databaseConfig.process.env.NODE_ENV);
}

Women.init(connection);
Factory.init(connection);
Jobs.init(connection);

Jobs.associate(connection.models);

module.exports = connection;