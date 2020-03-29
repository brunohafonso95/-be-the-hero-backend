const { Router } = require('express');

const granteeController = require('./controllers/granteeController');
const incidentController = require('./controllers/incidentController');

const routes = Router();

routes.post('/grantees', granteeController.create);
routes.get('/grantees', granteeController.getAll);
routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.getAll);

module.exports = routes;
