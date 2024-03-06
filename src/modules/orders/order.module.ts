import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ConfigModule } from '@nestjs/config';
import { EntityModule } from 'src/entity/entity.module';
import { GuardModule } from 'src/guards/guards.module';
import { HttpResponse } from 'src/common/httpResponse';
import { GuardService } from 'src/guards/guards.service';

@Module({
  imports: [ConfigModule.forRoot(), EntityModule, GuardModule],
  controllers: [OrderController],
  providers: [OrderService, HttpResponse, GuardService],
})
export class OrderModule {}