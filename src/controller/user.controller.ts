import { NextFunction, Request, Response } from 'express';
import { omit } from 'lodash';
import mongoose from 'mongoose';
import { UserDocument } from '../models/user.model';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';
import pickObject from '../utils/pickObject';

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await createUser(req.body);
    const returnUser = pickObject(user, ['email']);
    return res.status(200).json(returnUser);
  } catch (error: any) {
    console.log(error);
    res.sendStatus(401).send(error.message);
  }
}
