import { Op } from "sequelize";
import Procedimento from "../models/Procedimento";

class ProcedimentosController {
  async index(req, res) {
    const { tipo } = req.query;
    const where = {};
    if (tipo) {
        where.tipoId={[Op.in]:[tipo]}
    } 

    try {
      const procedimentos = await Procedimento.findAll({where});
      if(procedimentos.length>0){
        return res.json(procedimentos);
      }
      return res.status(405).json('The GET method has not been defined for individual resources');
    } catch (e) {
      console.log(e)
      return res.status(405).json('The GET method has not been defined for individual resources');
    }
  }
 
}

export default new ProcedimentosController();
