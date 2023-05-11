import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/jwt.util';

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization')?.replace(
    /^Bearer\s/,
    ''
  );
  if (!accessToken) {
    return next();
  }
  const { decodedPayload, expired } = verifyJwt(accessToken);
  if (decodedPayload) {
    res.locals.user = decodedPayload;
    return next();
  }
};
