import mongoose, { HydratedDocument } from 'mongoose';
import { UserDocument, UserModel } from '../models/user.model';
import { CreateUserInput } from '../schema/user.schema';

export async function createUser(input: CreateUserInput) {
  try {
    await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
