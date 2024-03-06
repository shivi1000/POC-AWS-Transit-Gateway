import { Connection } from 'mongoose';
import { ENUM } from 'src/common/enum';
import { UserSchema } from './user.schema';
import { UserSessionSchema } from './userSession.schema';
import { OrderSchema } from './order.schema';
import { PaymentSchema } from './payment.schema';
export const schemaProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model(ENUM.COLLECTIONS.USER, UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'USER_SESSION_MODEL',
    useFactory: (connection: Connection) => connection.model(ENUM.COLLECTIONS.USER_SESSION, UserSessionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'ORDER_MODEL',
    useFactory: (connection: Connection) => connection.model(ENUM.COLLECTIONS.ORDERS, OrderSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'PAYMENT_MODEL',
    useFactory: (connection: Connection) => connection.model(ENUM.COLLECTIONS.PAYMENTS, PaymentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
