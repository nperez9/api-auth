import mongoose, { Document } from 'mongoose';
import { User } from '../interfaces';

interface IUserModel extends User, Document {

}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 255 },
  email: { type: String, required: true, max: 255, unique: true },
  password: { type: String, required: true, max: 1024 },
  created_at: { type: Date, default: Date.now },
});

const userModel = mongoose.model<IUserModel>('user', userSchema, 'users');

export default userModel;