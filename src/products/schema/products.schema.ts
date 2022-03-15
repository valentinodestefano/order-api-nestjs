import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';


@Schema()
export class Product{

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    price: number;

    @Prop({required: true})
    url_image: string;

    @Prop({ unique : true, required : true, dropDups: true })
    serie_number: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);