const { solicitacao, solicitacaoprocedimento, paciente, procedimento } = require('../database/models');
const { Op } = require('sequelize');

const store = async function (request, response) {
  const datas = {
    data: request.body.data,
    pacienteId: request.body.paciente,
  };
  const procedimento = request.body.procedimentos;
  try {
    const data = await solicitacao.create(datas);
    procedimento.forEach(async (a) => {
      const ds = {
        procedimentoId: a.id,
        solicitacaoId: data.id,
      };
      const pro = await solicitacaoprocedimento.create(ds);
    });
    return response.status(200).json(data);
  } catch (error) {
    return response
      .status(405)
      .json('The GET method has not been defined for individual resources');
  }
};

const show = async function (request, response) {
  
  where = {};
  if (request.query.paciente) {
    where.pacienteId = request.query.paciente;
  }
  
  where.data={[Op.between]:[new Date(request.query.inicio+"T00:00:00Z"), new Date(request.query.fim+"T23:59:59Z")]}
  try {
    const data = await solicitacao.findAll({
      where,
      include: [
        {
          model: paciente,
          as: 'paciente',
        },
        {
          model: solicitacaoprocedimento,
          as: 'solicitacaoprocedimento',
          include: [{
            model: procedimento,
            as: 'procedimento',
          }]
        },
      ],
    });
    
    return response.status(200).json(data);
  } catch (error) {
    return response
      .status(405)
      .json('The GET method has not been defined for individual resources');
  }
};

module.exports = { store, show };
