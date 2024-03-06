import { Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/payment.dto';
import { PaymentEntity } from 'src/entity/payment.entity';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentEntity: PaymentEntity) {}

  async makePayment(makePaymentDto: MakePaymentDto) {
    const createdPayment = await this.paymentEntity.saveData(makePaymentDto);
    return createdPayment;
  }
}