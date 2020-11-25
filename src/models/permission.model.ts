import mongoose, { Document } from 'mongoose';
import { Permission } from '../interfaces';

interface IPermissionModel extends Permission, Document {

}

const permissionSchema = new mongoose.Schema({
  code: { type: String, required: true, max: 255, unique: true },
  endpoint: { type: String, required: true, unique: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
});

const permissionModel = mongoose.model<IPermissionModel>('permission', permissionSchema, 'permissions');

export default permissionModel;