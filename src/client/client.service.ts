import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ClientInterface } from './interface/client.interface';
import { CreateClientDTO } from './dto/client.dto';


@Injectable()
export class ClientService {

    constructor(@InjectModel('Client') private readonly clientModel: Model<ClientInterface>){}

    async getClients(): Promise<ClientInterface[]> {
        const clients = await this.clientModel.find()
        return clients;
    }

    async getClient(clientID: string): Promise<ClientInterface>{
        const client = await this.clientModel.findById(clientID);
        return client;
    }

    async createClient(createClientDTO: CreateClientDTO): Promise<ClientInterface>{
       const newClient = new this.clientModel(createClientDTO); 
       newClient.email = newClient.email.toLocaleLowerCase();
       return await newClient.save();
    }

    async deleteClient(clientID: string): Promise<ClientInterface>{
        const clientDeleted = await this.clientModel.findByIdAndDelete(clientID);
        return clientDeleted;
    }

    async updateClient(clientID: string, createClientDTO: CreateClientDTO): Promise<ClientInterface>{
        const clientToUpdate = await this.clientModel.findByIdAndUpdate(clientID, createClientDTO, { new: true });
        return await clientToUpdate.save();
    }


}
