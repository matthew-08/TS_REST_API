import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { UserDocument } from '../models/user.model';
import { createUser } from '../service/user.service';

export async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password } = req.body;
  try {
    await createUser(req.body);
  } catch (error: any) {
    console.log(error);
    res.sendStatus(401).send(error.message);
  }
}
