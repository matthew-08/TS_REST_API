import type { Express } from 'express';
import createUserSessionHandler from './controller/session.controller';
import { createUserHandler } from './controller/user.controller';
import validateSchema from './middleware/validateResource';
import zCreateSessionSchema from './schema/session.schema';
import zUserSchema from './schema/user.schema';

const routes = (app: Express) => {
  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200);
  });
  app.post('/api/users', validateSchema(zUserSchema), createUserHandler);
  app.post(
    '/api/sessions',
    validateSchema(zCreateSessionSchema),
    createUserSessionHandler
  );

  app.get('/api/sessions' /* getUserSessionsHandler */);
};

export default routes;
