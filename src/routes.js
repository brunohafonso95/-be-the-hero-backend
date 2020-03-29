const { Router } = require('express');

const granteeController = require('./controllers/granteeController');

const routes = Router();

routes.post('/grantees', granteeController.create);
routes.get('/grantees', granteeController.getAll);

module.exports = routes;
