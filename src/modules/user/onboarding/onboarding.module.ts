import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpResponse } from 'src/common/httpResponse';
import { EntityModule } from 'src/entity/entity.module';
import { GuardModule } from 'src/guards/guards.module';
import { GuardService } from 'src/guards/guards.service';
import { UserOnBoardingController } from './onboarding.controller';
import { UserOnBoardingService } from './onboarding.service';
@Module({
  imports: [ConfigModule.forRoot(), EntityModule, GuardModule],
  controllers: [UserOnBoardingController],
  providers: [UserOnBoardingService, HttpResponse, GuardService],
})
export class UserOnBoardingModule {}
