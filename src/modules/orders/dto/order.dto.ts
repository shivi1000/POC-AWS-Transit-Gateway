import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  customerId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
}