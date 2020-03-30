const { Router } = require('express');

const granteeController = require('./controllers/granteeController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = Router();

routes.post('/grantees', granteeController.create);
routes.get('/grantees', granteeController.getAll);
routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.getAll);
routes.delete('/incidents/:id', incidentController.delete);
routes.get('/profile', profileController.getById);
routes.post('/sessions', sessionController.create);

module.exports = routes;
