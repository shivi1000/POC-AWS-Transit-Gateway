import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';
import { OrderEntity } from 'src/entity/order.entity';

@Injectable()

@Injectable()
export class OrderService {
  constructor(private readonly orderEntity: OrderEntity) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const createdOrder = await this.orderEntity.saveData(createOrderDto);
    return createdOrder;
  }
}