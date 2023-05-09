import mongoose, { HydratedDocument } from 'mongoose';
import { UserDocument, UserModel } from '../models/user.model';

export async function createUser(input: HydratedDocument<UserDocument>) {
  try {
    await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
