import { Document } from "mongoose";

export interface ClientInterface extends Document {
     name: string;
     lastname: string;
     email: string;
     address: string;
     clientpersonal_id: string;
}