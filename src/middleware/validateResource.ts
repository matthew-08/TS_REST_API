import { NextFunction, Request, Response } from 'express';

import z, { AnyZodObject } from 'zod';

const validateSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };

export default validateSchema;
