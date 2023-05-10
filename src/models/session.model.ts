import mongoose from 'mongoose';
import { boolean } from 'zod';
import { UserDocument } from './user.model';

export interface SessionModel {
  userId: UserDocument['_id'];
  valid: boolean;
  userAgent: string;
}

const sessionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

const SessionModel = mongoose.model<SessionModel>('User', sessionSchema);

export default SessionModel;
