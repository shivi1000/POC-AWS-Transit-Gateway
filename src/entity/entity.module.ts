import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/database/db.module';
import { schemaProviders } from 'src/schema/schema.provider';
import { UserEntity } from './user.entity';
import { UserSessionEntity } from './userSession.entity';
import { OrderEntity } from './order.entity';
import { PaymentEntity } from './payment.entity';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...schemaProviders,
    UserEntity,
    UserSessionEntity,
    OrderEntity,
    PaymentEntity
  ],
  exports: [
    UserEntity,
    UserSessionEntity,
    OrderEntity,
    PaymentEntity
  ],
})
export class EntityModule {}
