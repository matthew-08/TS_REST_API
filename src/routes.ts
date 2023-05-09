import type { Express } from 'express';
import { createUserHandler } from './controller/user.controller';
import validateSchema from './middleware/validateResource';
import zUserSchema from './schema/user.schema';

const routes = (app: Express) => {
  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200);
  });
  app.post('/api/users', validateSchema(zUserSchema), createUserHandler);
};

export default routes;
