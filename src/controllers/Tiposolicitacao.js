const { tiposolicitacao } = require('../database/models');

const show = async function (request, response) {
  const where = {};
    where.status="ativo";
  try {
    const data = await tiposolicitacao.findAll({where});
    return response.status(200).json(data);
  } catch (error) {
    return response
      .status(405)
      .json('The GET method has not been defined for individual resources');
  }
};

module.exports = { show };
