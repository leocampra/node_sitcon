import Sequelize, { Model } from "sequelize";

export default class Paciente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        datanasc: Sequelize.DATE,
        cpf: Sequelize.STRING,
        status: Sequelize.ENUM("ativo", "inativo"),
      },
      { sequelize }
    );
    return this;
  }
}
