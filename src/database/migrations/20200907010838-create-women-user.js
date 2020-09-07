module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('women', { 
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
        allowNull: false,
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
      description: Sequelize.STRING,
      cpf: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      link_for_linkedin: Sequelize.STRING,
      experiences: {
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      agree_to_terms: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      apply: {
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
    await queryInterface.dropTable('women');
  }
};

