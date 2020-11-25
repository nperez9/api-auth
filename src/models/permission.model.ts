import mongoose, { Document } from 'mongoose';
import { Permission } from '../interfaces';

interface IPermissionModel extends Permission, Document {

}

const permissionSchema = new mongoose.Schema({
  code: { type: String, required: true, max: 255, unique: true },
  endpoint: { type: String, required: true, unique: true },
  description: { type: String },
});

const permissionModel = mongoose.model<IPermissionModel>('permission', permissionSchema, 'permissions');

export default permissionModel;