'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pacientes",
      [
        {
          nome: "Augusto Fernandes",
          datanasc: "2000-08-10",
          cpf: "210.298.293-09",
          status: "ativo",
        },
        {
          nome: "Maria Silva Oliveira",
          datanasc: "1999-03-21",
          cpf: "210.298.293-09",
          status: "ativo",
        },
        {
          nome: "Alfonse Smikchuz",
          datanasc: "2002-10-02",
          cpf: "210.298.293-09",
          status: "ativo",
        },
        {
          nome: "Nagela Perreira",
          datanasc: "1997-05-16",
          cpf: "210.298.293-09",
          status: "ativo",
        },
        {
          nome: "João Paulo Ferreira",
          datanasc: "1995-06-26",
          cpf: "210.298.293-09",
          status: "inativo",
        },
        {
          nome: "Gustavo Hernanes",
          datanasc: "2001-07-10",
          cpf: "210.298.293-09",
          status: "ativo",
        },
        {
          nome: "Zira Silva",
          datanasc: "2003-02-14",
          cpf: "210.298.293-09",
          status: "ativo",
        },
        {
          nome: "Helena Marques",
          datanasc: "2000-01-11",
          cpf: "210.298.293-09",
          status: "ativo",
        },
        {
          nome: "Julio Costa Martins",
          datanasc: "1980-11-23",
          cpf: "210.298.293-09",
          status: "ativo",
        },
        {
          nome: "João Bicalho",
          datanasc: "1993-03-12",
          cpf: "210.298.293-09",
          status: "inativo",
        },
        {
          nome: "Carolina Rosa Silva",
          datanasc: "2001-12-24",
          cpf: "210.298.293-09",
          status: "ativo",
        },
        {
          nome: "Paulina Araujo",
          datanasc: "2002-08-10",
          cpf: "210.298.293-09",
          status: "ativo",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pacientes", null, {});
  }
};
