import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule, Routes } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from 'config/configuration';
import { LoggerModule } from './logger/logger.module';
import { DatabaseModule } from './providers/database/db.module';
import { schemaProviders } from './schema/schema.provider';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'src/filters/exceptionFilter';
import { UserOnBoardingModule } from './modules/user/onboarding/onboarding.module';
import { AWSModule } from './modules/aws/aws.module';
import { OrderModule } from './modules/orders/order.module';
import { PaymentModule } from './modules/payments/payment.module';

const routes: Routes = [
  {
    path: '/user',
    children: [
      {
        path: '/onboarding',
        module: UserOnBoardingModule,
      },
    ],
    },
    {
      path: '/order',
      children: [
        {
          path: '/order',
          module: OrderModule,
        },
      ],
      },
      {
        path: '/payment',
        children: [
          {
            path: '/payment',
            module: PaymentModule,
          },
        ],
        },
];
@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    LoggerModule,
    RouterModule.register(routes),
    UserOnBoardingModule,
    AWSModule,
    PaymentModule,
    OrderModule
  ],
  providers: [
    ...schemaProviders,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
