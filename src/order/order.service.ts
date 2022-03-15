import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { OrderInterface } from './interface/order.interface';
import { CreateOrderDTO } from './dto/order.dto';

@Injectable()
export class OrderService {

    constructor(@InjectModel('Order') private readonly orderModel: Model<OrderInterface>){}

    async getOrders(): Promise<OrderInterface[]> {
        const orders = await this.orderModel.find().populate('client').populate('products');
        return orders;
    }

    async getOrder(orderID: string): Promise<OrderInterface>{
        const order = await this.orderModel.findById(orderID);
        return order;
    }

    async createOrder(createOrderDTO: CreateOrderDTO): Promise<OrderInterface>{
       const newOrder = new this.orderModel(createOrderDTO); 
       return await newOrder.save();
    }

    async deleteOrder(orderID: string): Promise<OrderInterface>{
        const orderDeleted = await this.orderModel.findByIdAndDelete(orderID);
        return orderDeleted;
    }

    async updateOrder(orderID: string, createOrderDTO: CreateOrderDTO): Promise<OrderInterface>{
        const orderToUpdate = await this.orderModel.findByIdAndUpdate(orderID, createOrderDTO, { new: true });
        return await orderToUpdate.save();
    }


}
