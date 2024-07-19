'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profissionalatendes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      procedimentos_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'procedimentos',
          key:'id'
        },
        allowNull: false
      },
      professional_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'profissionals',
          key: "id"
        },
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('ativo','inativo'),
        allowNull: true
      },
      createdAt: {
        type: "TIMESTAMP",
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        type: "TIMESTAMP",
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('profissionalatendes');
  }
};