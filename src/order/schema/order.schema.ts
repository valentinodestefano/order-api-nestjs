import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';

import { Product } from "src/products/schema/products.schema";
import { Client } from "src/client/schema/client.schema";


@Schema()
export class Order{

    @Prop({required: true})
    created_at: Date;

    @Prop({required: true})
    status: string;

    @Prop({ unique : true, required : true, dropDups: true })
    order_id: string;
    
    @Prop({ type:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
    products: Product[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
    client: Client;
}

export const OrderSchema = SchemaFactory.createForClass(Order);