'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profissionalatende extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      profissionalatende.belongsTo(models.profissional, {
        foreignKey: 'professional_id',
        as: 'profissional',
      });
      profissionalatende.belongsTo(models.procedimento, {
        foreignKey: 'procedimentos_id',
        as: 'procedimento',
      });
    }
  };
  profissionalatende.init({
    procedimentos_id: DataTypes.INTEGER,
      professional_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'profissionalatende',
  });
  return profissionalatende;
};