import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import UserModel from '../models/user.model';

export async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password } = req.body;
  try {
    const user = await UserModel.create({
      name,
      email,
      password,
    });
  } catch (error: any) {
    console.log(error);
    res.sendStatus(401).send(error.message);
  }
}
