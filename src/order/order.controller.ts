import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { OrderService } from './order.service';
import { CreateOrderDTO } from './dto/order.dto';

@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService){}

    @ApiTags('Order')
    @Post('/createOrder')
    async createOrder(@Res() res, @Body() createOrderDTO: CreateOrderDTO){
        const order = await this.orderService.createOrder(createOrderDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Order Created',
            order: order
        });
    }

    @ApiTags('Order')
    @Get('/getOrders')
    async getOrders(@Res() res){
        const orders = await this.orderService.getOrders();
        return res.status(HttpStatus.OK).json({
            message: 'Succesful',
            orders: orders
        })
    }

    @ApiTags('Order')
    @Get('/:orderID')
    async getOrder(@Res() res, @Param('orderID') orderID: string){
        const order = await this.orderService.getOrder(orderID);
        if (!order) {
           return res.status(HttpStatus.BAD_REQUEST);
        }
        return res.status(HttpStatus.OK).json({
            message: 'succesful',
            order: order
        })
    }


    @ApiTags('Order')
    @Delete('/deleteOrder/:orderID')
    async deleteOrder(@Res() res, @Param('orderID') orderID: string){
        const order = await this.orderService.deleteOrder(orderID);
        return res.status(HttpStatus.OK).json({
            message: 'succesful'
        })
    }

    @ApiTags('Order')
    @Put('/update/:orderID')
    async updateOrder(@Param('orderID') orderID: string, @Body() createOrderDTO: CreateOrderDTO, @Res() res){
        const updatedOrder = await this.orderService.updateOrder(orderID, createOrderDTO);
        return res.status(HttpStatus.OK).json({
            message: 'succesful update',
            updatedOrder: updatedOrder
        })
    }

}
