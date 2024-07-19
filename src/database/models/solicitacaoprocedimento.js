'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class solicitacaoprocedimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      solicitacaoprocedimento.belongsTo(models.procedimento, {
        foreignKey: 'procedimentoId',
        as: 'procedimento',
      });

    }
  };
  solicitacaoprocedimento.init({
    procedimentoId: DataTypes.INTEGER,
    solicitacaoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'solicitacaoprocedimento',
  });
  return solicitacaoprocedimento;
};