import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MakePaymentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  orderId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  status: number;
}