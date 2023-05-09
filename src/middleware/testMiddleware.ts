import { NextFunction, Request, Response } from 'express';

const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('in middleware');
  next();
};

export const curriedMiddleware =
  (curriedValue: string) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(curriedValue);
    next();
  };

export default testMiddleware;
