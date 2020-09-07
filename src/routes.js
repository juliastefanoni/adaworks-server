const { Router } = require('express');
const cool = require('cool-ascii-faces');

const authMiddleware = require('./app/middlewares/auth');

const WomenController = require('./app/controllers/WomenController');
const FactoryController = require('./app/controllers/FactoryController');
const SessionController = require('./app/controllers/SessionController');
const JobsController = require('./app/controllers/JobsController');

const routes = new Router();

routes.get('/cool', (req, res) => res.send(cool()));

routes.post('/women-register', WomenController.store);
routes.post('/factory-register', FactoryController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.get('/jobs', JobsController.index);
routes.post('/jobs', JobsController.store);

routes.get('/factory', FactoryController.index);

module.exports = routes;