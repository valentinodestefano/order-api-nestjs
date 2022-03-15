import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MailerService } from '@nestjs-modules/mailer';
import { Cron, CronExpression } from '@nestjs/schedule';

import { ClientInterface } from './interface/client.interface';
import { CreateClientDTO } from './dto/client.dto';


@Injectable()
export class ClientService {

    constructor(@InjectModel('Client') private readonly clientModel: Model<ClientInterface>, private mailerService: MailerService){}

    async getClients(): Promise<ClientInterface[]> {
        const clients = await this.clientModel.find();
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

    async sendUserEmail(email, client) {
    
        await this.mailerService.sendMail({
          to: email,
          subject: 'PROMO',
          template: '../mail/templates/promo', 
          context: { 
            clientName: client.name,
          },
        });
    }

    
    @Cron('0 */5 9-17 * * *')
    async sendEmailsPromo(): Promise<ClientInterface[]> {
        const clients = await this.clientModel.find();
        console.log("CRON");
        for(var i=0; i < clients.length; i++){
            const client = clients[i];
            const email = client.email;
            console.log(email);
            await this.sendUserEmail(email, client);
        }
        return clients;
    }


}
