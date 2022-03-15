import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ProductInterface } from './interface/products.interface';

import { CreateProductDTO } from './dto/products.dto';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Product') private readonly productsModel: Model<ProductInterface>){}

    async getProducts(): Promise<ProductInterface[]> {
        const products = await this.productsModel.find()
        return products;
    }

    async getProduct(productID: string): Promise<ProductInterface>{
        const product = await this.productsModel.findById(productID);
        return product;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<ProductInterface>{
       const newProduct = new this.productsModel(createProductDTO); 
       return await newProduct.save();
    }

    async deleteProduct(productID: string): Promise<ProductInterface>{
        const productDeleted = await this.productsModel.findByIdAndDelete(productID);
        return productDeleted;
    }

    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<ProductInterface>{
        const productToUpdate = await this.productsModel.findByIdAndUpdate(productID, createProductDTO, { new: true });
        return await productToUpdate.save();
    }

}
