import { Document } from "mongoose";

export interface OrderInterface extends Document {
     created_at: Date;
     order_id: string;
}