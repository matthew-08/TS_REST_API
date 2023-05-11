import { Request, Response } from 'express';
import { createSesssion } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.util';
import config from 'config';

export async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send('Invalid email or password');
  }

  const session = await createSesssion(
    user._id as string,
    req.get('user-agent') || ''
  );

  const accessToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    {
      expiresIn: config.get('accessTokenTTL'), // 15 Minutes
    }
  );
}
