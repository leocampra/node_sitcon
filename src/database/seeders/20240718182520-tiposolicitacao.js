'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "tiposolicitacaos",
      [
        {
          descricao: "Consulta",
          status: "ativo",
        },
        {
          descricao: "Exames Laboratoriais",
          status: "ativo",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("tiposolicitacaos", null, {});
  }
};
