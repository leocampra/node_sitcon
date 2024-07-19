'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "procedimentos",
      [
        {
          descricao: "Consulta Pediátrica",
          tipo_id: 1,
          status: "ativo",
        },
        {
          descricao: "Consulta Clínico Geral",
          tipo_id: 1,
          status: "ativo",
        },
        {
          descricao: "Hemograma",
          tipo_id: 2,
          status: "ativo",
        },
        {
          descricao: "Glicemia",
          tipo_id: 2,
          status: "ativo",
        },
        {
          descricao: "Colesterol",
          tipo_id: 2,
          status: "ativo",
        },
        {
          descricao: "Triglicerídeos",
          tipo_id: 2,
          status: "ativo",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("procedimentos", null, {});
  }
};
