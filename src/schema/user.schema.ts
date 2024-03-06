import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ENUM } from '../common/enum';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: number;
  status: number;
  mobileStatus: any;
  token: string;
  password: string;
  role: number;
  gender: string;
  otp: any;
  isProfileCompleted: boolean;
}

export const UserSchema = new mongoose.Schema(
  {
    firstName: { type: Schema.Types.String, required: true },
    lastName: { type: Schema.Types.String, required: true },
    email: { type: String },
    mobileNo: { type: Schema.Types.String },
    status: { type: Schema.Types.Number, default: ENUM.USER_PROFILE_STATUS.PENDING, required: true },
    mobileStatus: { type: Schema.Types.Boolean, default: false, required: true },
    token: String,
    password: { type: String, required: true },
    role: { type: Number, required: true },
    gender: { type: String },
    otp: {
      otp: Number,
      expireTime: Date,
      isVerified: Boolean,
    },
    isProfileCompleted: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: ENUM.COLLECTIONS.USER,
  }
);
