import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ENUM } from '../common/enum';

export interface IOrder extends Document {
  customerId: any;
  productId: any;
  quantity: number;
  totalPrice: number;
}

export const OrderSchema = new mongoose.Schema(
  {
    customerId: { type: Schema.Types.ObjectId, required: true, ref: ENUM.COLLECTIONS.USER },
    productId: { type: Schema.Types.ObjectId, required: true },
    quantity: { type: Schema.Types.Number },
    totalPrice: { type: Schema.Types.Number },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: ENUM.COLLECTIONS.ORDERS,
  }
);
