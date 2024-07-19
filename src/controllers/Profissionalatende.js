const {
  procedimento,
  profissional,
  profissionalatende,
} = require('../database/models');

const show = async function (request, response) {
  where = {}
  if(request.params.id){
where.procedimentos_id=request.params.id
  }
  where.status="ativo"
  try {
    const data = await profissionalatende.findAll({
      where,
      include: [
        {
          model: profissional,
          as: 'profissional',
        },
        {
          model: procedimento,
          as: 'procedimento',
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

module.exports = { show };
