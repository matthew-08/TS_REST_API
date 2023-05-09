import mongoose, { HydratedDocument } from 'mongoose';
import bcrpyt from 'bcrypt';
import config from 'config';

interface User {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<User>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<User>('User', userSchema);
export default UserModel;
