import mongoose, { HydratedDocument, StringExpression } from 'mongoose';
import { UserDocument, UserModel } from '../models/user.model';
import { CreateUserInput } from '../schema/user.schema';

export async function createUser(input: CreateUserInput) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });
  if (!user) {
    return false;
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    return false;
  }
}
