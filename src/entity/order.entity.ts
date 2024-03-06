import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { IOrder } from 'src/schema/order.schema';
import { Dao } from 'src/providers/database/dao.provider';

@Injectable()
export class OrderEntity extends Dao {
  constructor(@Inject('ORDER_MODEL') private orderModel: Model<IOrder>) {
    super(orderModel);
  }

}
