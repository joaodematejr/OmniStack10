const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringArray');
const { findConnections, sendMessage } = require('../websocket');

//Index: LISTAGEM 
//Show: MOSTRAR 1
//Store: CRIAR 
//Update: ATUALIZAR
//Destroy: DELETAR

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();
    return response.json(devs)
  },
  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {

      const ApiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

      const { name = login, avatar_url, bio } = ApiResponse.data;

      const techsArray = parseStringArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })

      //FILTRAR AS CONEXOES QUE ESTÃO HA NO MAXIMO 10KM DE DISTANCIA 
      //E QUE NOVO DEV TENHA PELO UMA DAS TECNOLOGIAS FILTRADAS

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      )

      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }
    return response.json(dev);
  }
}