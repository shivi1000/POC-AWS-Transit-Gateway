import { Schema, SchemaTypes } from 'mongoose';
import { ENUM } from '../common/enum';
export interface IUserSession extends Document {
  userId: string;
  platform?: string;
  status: number;
  ipAddress?: string;
  deviceToken?: string;
}

export const UserSessionSchema = new Schema(
  {
    userId: { type: SchemaTypes.ObjectId, required: true, index: true, ref: ENUM.COLLECTIONS.USER },
    platform: { type: SchemaTypes.Number, default: ENUM.PLATFORM.IOS },
    status: { type: SchemaTypes.Number, default: ENUM.STATUS.ACTIVE },
    ipAddress: { type: SchemaTypes.String },
    deviceToken: { type: SchemaTypes.String, required: true, default: '' },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: ENUM.COLLECTIONS.USER_SESSION,
  }
);
