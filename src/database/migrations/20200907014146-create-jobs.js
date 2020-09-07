'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('jobs', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      localization: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      },
      remuneration: {
        type: Sequelize.FLOAT
      },
      experience: {
        type: Sequelize.STRING
      },
      factory_id: {
        type: Sequelize.INTEGER,
        references: { model: 'factory', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      occupation_area: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('jobs');
  }
};
