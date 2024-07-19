'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class solicitacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      solicitacao.belongsTo(models.paciente, {
        foreignKey: 'pacienteId',
        as: 'paciente',
      });
      solicitacao.hasMany(models.solicitacaoprocedimento, {
        foreignKey: 'solicitacaoId',
        as: 'solicitacaoprocedimento',
      });
    }
  };
  solicitacao.init({
    data: DataTypes.DATE,
    pacienteId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'solicitacao',
  });
  return solicitacao;
};