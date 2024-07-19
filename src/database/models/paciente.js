'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  paciente.init({
    nome: DataTypes.STRING,
    datanasc: DataTypes.DATE,
    cpf: DataTypes.STRING,
    status: DataTypes.ENUM("ativo", "inativo"),
  }, {
    sequelize,
    modelName: 'paciente',
  });
  return paciente;
};