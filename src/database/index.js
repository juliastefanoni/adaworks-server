  
const { Sequelize } = require('sequelize');

const databaseConfig = require('../config/database');

const Women = require('../app/models/Women');
const Factory = require('../app/models/Factory');
const Jobs = require('../app/models/Jobs');

const models = [Women, Factory, Jobs];

const connection = new Sequelize(databaseConfig);

Women.init(connection);
Factory.init(connection);
Jobs.init(connection);

Jobs.associate(connection.models);

module.exports = connection;