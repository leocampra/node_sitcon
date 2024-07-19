const { procedimento } = require('../database/models');
const { Op } = require("sequelize");

const show = async function (request, response) {
    const { tipo } = request.query;
    const where = {};
    if (tipo) {
        where.tipo_id={[Op.in]:[tipo]}
    } 
    where.status="ativo";
  try {
    const data = await procedimento.findAll({where});
    return response.status(200).json(data);
  } catch (error) {
    return response
      .status(405)
      .json('The GET method has not been defined for individual resources');
  }
};

module.exports = { show };
