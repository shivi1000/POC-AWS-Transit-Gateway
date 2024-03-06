import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ENUM } from '../common/enum';

export interface IPayment extends Document {
  orderId: any;
  amount: number;
  status: number;
}

export const PaymentSchema = new mongoose.Schema(
  {
    orderId: { type: Schema.Types.ObjectId, required: true, ref: ENUM.COLLECTIONS.ORDERS },
    amount: { type: Schema.Types.Number },
    status: { type: Schema.Types.Number },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: ENUM.COLLECTIONS.PAYMENTS,
  }
);
