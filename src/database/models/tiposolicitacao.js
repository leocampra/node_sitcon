'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposolicitacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tiposolicitacao.init({
    descricao: DataTypes.STRING,
    status: DataTypes.ENUM("ativo", "inativo")
  }, {
    sequelize,
    modelName: 'tiposolicitacao',
  });
  return tiposolicitacao;
};