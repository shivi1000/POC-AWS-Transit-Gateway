import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { ConfigModule } from '@nestjs/config';
import { EntityModule } from 'src/entity/entity.module';
import { GuardModule } from 'src/guards/guards.module';
import { HttpResponse } from 'src/common/httpResponse';
import { GuardService } from 'src/guards/guards.service';

@Module({
    imports: [ConfigModule.forRoot(), EntityModule, GuardModule],
  controllers: [PaymentController],
  providers: [PaymentService, HttpResponse, GuardService],
})
export class PaymentModule {}