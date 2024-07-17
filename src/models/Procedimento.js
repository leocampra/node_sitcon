import Sequelize, { Model } from "sequelize";

export default class Procedimento extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        tipoId: Sequelize.INTEGER,
        status: Sequelize.ENUM("ativo", "inativo"),
      },
      { sequelize }
    );
    return this;
  }
}
