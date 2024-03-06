import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { IPayment } from 'src/schema/payment.schema';
import { Dao } from 'src/providers/database/dao.provider';

@Injectable()
export class PaymentEntity extends Dao {
  constructor(@Inject('PAYMENT_MODEL') private paymentModel: Model<IPayment>) {
    super(paymentModel);
  }

}