const { paciente } = require('../database/models');

const show = async function (request, response) {
  try {
    const data = await paciente.findByPk(request.params.id);
    return response.status(200).json(data);
  } catch (error) {
    return response
      .status(405)
      .json('The GET method has not been defined for individual resources');
  }
};

module.exports = { show };
