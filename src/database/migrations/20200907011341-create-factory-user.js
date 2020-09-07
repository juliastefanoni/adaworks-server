'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('factory', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      factory_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      occupation_area: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      company_polices: {
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      link_for_linkedin: Sequelize.STRING,
      agree_to_terms: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      authorization: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      hire: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('factory');
  }
};
