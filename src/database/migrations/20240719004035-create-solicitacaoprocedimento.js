'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('solicitacaoprocedimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      procedimentoId: {
        type: Sequelize.INTEGER,
        references:{
          model:'procedimentos',
          key: "id"
        },
        allowNull: false,
      },
      solicitacaoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('solicitacaoprocedimentos');
  }
};