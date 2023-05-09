import mongoose, { HydratedDocument, Mongoose } from 'mongoose';
import bcrpyt from 'bcrypt';
import config from 'config';

interface User extends mongoose.Document {
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

userSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrpyt.genSalt(config.get<number>('saltWorkFactor'));

  const passHash = await bcrpyt.hash(this.password, salt);
  this.password = passHash;
  return next();
});

const UserModel = mongoose.model<User>('User', userSchema);
export default UserModel;
