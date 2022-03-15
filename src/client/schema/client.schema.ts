import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';


@Schema()
export class Client{

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    lastname: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    address: string;

    @Prop({ unique : true, required : true, dropDups: true })
    clientpersonal_id: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

