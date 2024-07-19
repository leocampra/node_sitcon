'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profissionalatendes",
      [
        {
          procedimentos_id: 1,
          professional_id: 2,
          status: "ativo",
        },
        {
          procedimentos_id: 2,
          professional_id: 2,
          status: "ativo",
        },
        {
          procedimentos_id: 2,
          professional_id: 3,
          status: "ativo",
        },
        {
          procedimentos_id: 1,
          professional_id: 3,
          status: "inativo",
        },
        {
          procedimentos_id: 3,
          professional_id: 1,
          status: "ativo",
        },
        {
          procedimentos_id: 4,
          professional_id: 1,
          status: "ativo",
        },
        {
          procedimentos_id: 5,
          professional_id: 1,
          status: "ativo",
        },
        {
          procedimentos_id: 6,
          professional_id: 1,
          status: "ativo",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profissionalatendes", null, {});
  }
};
