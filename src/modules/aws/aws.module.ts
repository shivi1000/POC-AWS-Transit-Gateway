import { Module } from '@nestjs/common';
import { TransitGatewayModule } from './transitGateway/transitGateway.module';
import { HttpResponse } from 'src/common/httpResponse';
import { GuardService } from 'src/guards/guards.service';
import { TransitGatewayService } from './transitGateway/transitGateway.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TransitGatewayModule],
  exports: [TransitGatewayModule],
  providers: [HttpResponse, GuardService, JwtService, TransitGatewayService],
})
export class AWSModule {}