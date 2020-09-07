import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import WomenController from './app/controllers/WomenController';
import FactoryController from './app/controllers/FactoryController';
import SessionController from './app/controllers/SessionController';
import JobsController from './app/controllers/JobsController';

const routes = new Router();

routes.post('/women-register', WomenController.store);
routes.post('/factory-register', FactoryController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.get('/jobs', JobsController.index);
routes.post('/jobs', JobsController.store);

routes.get('/factory', FactoryController.index);

export default routes;