import type { Express } from 'express';
const routes = (app: Express) => {
  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200);
  });
};

export default routes;
