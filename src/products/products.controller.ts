import { Controller } from '@nestjs/common';
import { Body, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductsService } from './products.service';

import { CreateProductDTO } from './dto/products.dto';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){}

    @ApiTags('Product')
    @Post('/createProduct')
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productsService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Created',
            product: product
        });
    }

    @ApiTags('Product')
    @Get('/getProducts')
    async getProducts(@Res() res){
        const products = await this.productsService.getProducts();
        return res.status(HttpStatus.OK).json({
            message: 'Succesful',
            products: products
        })
    }

    @ApiTags('Product')
    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID: string){
        const product = await this.productsService.getProduct(productID);
        if (!product) {
           return res.status(HttpStatus.BAD_REQUEST);
        }
        return res.status(HttpStatus.OK).json({
            message: 'succesfull',
            product: product
        })
    }

    @ApiTags('Product')
    @Delete('/deleteProduct/:productID')
    async deleteProduct(@Res() res, @Param('productID') productID: string){
        const product = await this.productsService.deleteProduct(productID);
        return res.status(HttpStatus.OK).json({
            message: 'succesful'
        })
    }

    @ApiTags('Product')
    @Put('/updateProduct/:productID')
    async updateClient(@Param('productID') productID: string, @Body() createProductDTO: CreateProductDTO, @Res() res){
        const updatedProduct = await this.productsService.updateProduct(productID, createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'succesful update',
            updatedProduct: updatedProduct
        })
    }

}
