import { Module } from '@nestjs/common';
import { TransitGatewayService } from './transitGateway.service';

@Module({
  providers: [TransitGatewayService],
  exports: [TransitGatewayService],
})
export class TransitGatewayModule {}
