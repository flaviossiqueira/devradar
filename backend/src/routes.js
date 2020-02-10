const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

//Metodos Http get, post, put, delete

// Tipos de parâmetros:

// Query Params: req.query(Fitros, ordenação, paginação, ...)
// Route Params: request.params(identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

const routes = Router();

routes.get('/devs', DevController.index)

routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
module.exports = routes;