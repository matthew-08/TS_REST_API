import { NextFunction, Request, Response } from 'express';
import { omit } from 'lodash';
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
    const returnUser = {
      email: user.email,
    };
    return res.status(200).json(returnUser);
  } catch (error: any) {
    console.log(error);
    res.sendStatus(401).send(error.message);
  }
}
