import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MakePaymentDto } from './dto/payment.dto';
import { ApiTags } from '@nestjs/swagger';
import { HttpResponse } from 'src/common/httpResponse';

@ApiTags('Payment ')
@Controller('/')
export class PaymentController {
  constructor(private readonly httpResponse: HttpResponse, private readonly paymentService: PaymentService) {}

  @Post()
  async makePayment(@Body() makePaymentDto: MakePaymentDto) {
    return this.paymentService.makePayment(makePaymentDto);
  }
}