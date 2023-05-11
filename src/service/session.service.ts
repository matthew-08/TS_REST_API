import SessionModel from '../models/session.model';

export async function createSesssion(userId: string, userAgent: string) {
  const session = await SessionModel.create({
    userId,
    userAgent,
  });

  return session.toJSON();
}
