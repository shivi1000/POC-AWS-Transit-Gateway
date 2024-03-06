import { ConfigService } from '@nestjs/config';
import { InitiateBookingDto } from 'src/modules/user/booking/dto/booking.dto';

const configService = new ConfigService();
export function generateRef(refType: string) {
  return refType + Math.floor(Math.random() * 9000000 + 10).toString();
}

export async function calculateAmountWithoutStripe(
  vendorData: any,
  initiateBookingDto: InitiateBookingDto,
) {
  // Static data for demo purposes
  const totalBaseShootCharges = 500; // Assuming total base shoot charges as $500

  const serviceCharges = ((totalBaseShootCharges) * 10) / 100; // Assuming 10% service charges
  const platformCharges = ((totalBaseShootCharges) * 5) / 100; // Assuming 5% platform charges
  const vendorEarnings = totalBaseShootCharges - platformCharges; // Vendor earnings
  const orderValue = totalBaseShootCharges + serviceCharges; // Order value

  // Static data for stripe charges
  const stripeTransactionCharges = 0.3; // Fixed stripe transaction charges
  const stripePercentageCharges = 2.9; // Stripe charges as percentage
  const stripeCharges = stripeTransactionCharges + (orderValue * (stripePercentageCharges / 100));

  const appEarning = platformCharges + serviceCharges - stripeCharges; // App earnings

  // Rounding off to 2 decimal places
  const totalOrderValue = Number(orderValue.toFixed(2));
  const totalVendorEarnings = Number(vendorEarnings.toFixed(2));
  const totalStripeCharges = Number(stripeCharges.toFixed(2));
  const totalAppEarnings = Number(appEarning.toFixed(2));

  return {
    totalBaseShootCharges,
    totalOrderValue,
    platformCharges,
    serviceCharges,
    totalStripeCharges,
    totalVendorEarnings,
    totalAppEarnings,
  };
}

