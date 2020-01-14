const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringArray')

module.exports = {
  async index(request, response) {
    //BUSCAR TODOS OS DEVS NUM RAIO DE 10KM
    //FILTRAR POR TECNOLOGIAS
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringArray(techs);

    const dev = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return response.json(dev)
  }
}