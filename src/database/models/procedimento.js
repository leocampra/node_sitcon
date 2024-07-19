'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class procedimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  procedimento.init({
    descricao: DataTypes.STRING,
    tipo_id: DataTypes.INTEGER,
        status: DataTypes.ENUM("ativo", "inativo"),
  }, {
    sequelize,
    modelName: 'procedimento',
  });
  return procedimento;
};