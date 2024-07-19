'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profissionals",
      [
        {
          nome: "Orlando Nobrega",
          status: "ativo",
        },
        {
          nome: "Rafaela Tenorio",
          status: "ativo",
        },
        {
          nome: "João Paulo Nobrega",
          status: "ativo",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profissionals", null, {});
  }
};
