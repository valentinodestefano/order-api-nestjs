import { Document } from "mongoose";

export interface ProductInterface extends Document {
     name: string;
     price: number;
     url_image: string;
     serie_number: string;
}