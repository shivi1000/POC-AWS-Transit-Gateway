import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';
import { ApiTags } from '@nestjs/swagger';
import { HttpResponse } from 'src/common/httpResponse';

@ApiTags('Order')
@Controller('/')
export class OrderController {
  constructor(private readonly httpResponse: HttpResponse, private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }
}