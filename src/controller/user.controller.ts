import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { UserDocument } from '../models/user.model';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.body);
    const user = await createUser(req.body);
    return res.send(user);
  } catch (error: any) {
    console.log(error);
    res.sendStatus(401).send(error.message);
  }
}
