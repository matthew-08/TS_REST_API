import type { Express } from 'express';
import testMiddleware, { curriedMiddleware } from './middleware/testMiddleware';
const routes = (app: Express) => {
  app.get(
    '/healthcheck',
    testMiddleware,
    curriedMiddleware('fff'),
    curriedMiddleware('aaa'),
    (req, res) => {
      res.sendStatus(200);
    }
  );
};

export default routes;
