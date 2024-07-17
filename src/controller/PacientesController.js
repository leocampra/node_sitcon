import { Op } from "sequelize";
import Paciente from "../models/Paciente";

class PacientesController {
  async index(req, res) {
    const { nome, cpf } = req.query;
    const where = {};
    if (nome) {
      where.nome={[Op.like]:`%${nome}%`}
    } 
    if (cpf) {
      where.cpf=cpf
    }
    try {
      const pacientes = await Paciente.findAll({where});
      if(pacientes.length>0){
        return res.json(pacientes);
      }
      return res.status(405).json('The GET method has not been defined for individual resources');
    } catch (e) {
      return res.status(405).json('The GET method has not been defined for individual resources');
    }
  }

  async show(req, res) {
    try {
      const pacientes = await Paciente.findByPk(req.params.id);
      if(pacientes!==null){
        return res.json(pacientes);
      }
      return res.status(405).json('The GET method has not been defined for individual resources');
    } catch (e) {
      return res.status(405).json('The GET method has not been defined for individual resources');
    }
  }
}

export default new PacientesController();
