import { Document } from "mongoose";
import { Client } from "src/client/schema/client.schema";

export interface OrderInterface extends Document {
     created_at: Date;
     order_id: string;
     status: string;
     client: Client;
}