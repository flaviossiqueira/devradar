const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');
// index, show, update, destroy

module.exports = {
    async index(request,response) {
        const devs = await Dev.find();

        return response.json(devs);
    },



    async store(request, response) {
        const { github_username,techs,latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, avatar_url, bio} = apiResponse.data;
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            const techsArray = parseStringAsArray(techs);
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        
        }
    

        return response.json(dev);
    }
};