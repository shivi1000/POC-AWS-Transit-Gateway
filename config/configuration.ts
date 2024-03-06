import { config } from 'dotenv';

const env = process.env.NODE_ENV || false;
if (!env) process.exit(100);

config({ path: `bin/.env.${env}` });

export default () => ({
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV,
  DB_URL: process.env.URI,
  DB_Name: process.env.DB_NAME,
  BASE_URL: process.env.BASE_URL,
  STRIPE_SECRET: process.env.STRIPE_SECRET || '',
  STRIPE_IDENTITY_WEBHOOK_SECRET: process.env.STRIPE_IDENTITY_WEBHOOK_SECRET,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  PRIMARY_SERVICE_COMMISSION: process.env.PRIMARY_SERVICE_COMMISSION,
  EXTRA_SERVICE_COMMISSION: process.env.EXTRA_SERVICE_COMMISSION,
  PLATFORM_COMMISSION: process.env.PLATFORM_COMMISSION,
  STRIPE_CHARGES: process.env.STRIPE_CHARGES,
  STRIPE_TRANSACTION_CHARGES: process.env.STRIPE_TRANSACTION_CHARGES,
  DEBUG: process.env.DEBUG,
});
