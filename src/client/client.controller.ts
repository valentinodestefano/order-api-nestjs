import { Controller } from '@nestjs/common';
import { Body, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';


import { ClientService } from './client.service';

import { CreateClientDTO } from './dto/client.dto';

@Controller('client')
export class ClientController {

    constructor(private clientService: ClientService){}

    @ApiTags('Client')
    @Post('/createClient')
    async createClient(@Res() res, @Body() createClientDTO: CreateClientDTO){
        const client = await this.clientService.createClient(createClientDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Client Created',
            client: client
        });
    }

    @ApiTags('Client')
    @Get('/getClients')
    async getClients(@Res() res){
        const clients = await this.clientService.getClients();
        return res.status(HttpStatus.OK).json({
            message: 'Succesful',
            clients: clients
        })
    }

    @ApiTags('Client')
    @Get('/:clientID')
    async getClient(@Res() res, @Param('clientID') clientID: string){
        const client = await this.clientService.getClient(clientID);
        if (!client) {
           return res.status(HttpStatus.BAD_REQUEST);
        }
        return res.status(HttpStatus.OK).json({
            message: 'succesfull',
            client: client
        })
    }

    @ApiTags('Client')
    @Delete('/deleteClient/:clientID')
    async deleteClient(@Res() res, @Param('clientID') clientID: string){
        const client = await this.clientService.deleteClient(clientID);
        return res.status(HttpStatus.OK).json({
            message: 'succesful'
        })
    }

    @ApiTags('Client')
    @Put('/update/:clientID')
    async updateClient(@Param('clientID') clientID: string, @Body() createClientDTO: CreateClientDTO, @Res() res){
        const updatedClient = await this.clientService.updateClient(clientID, createClientDTO);
        return res.status(HttpStatus.OK).json({
            message: 'succesful update',
            updatedClient: updatedClient
        })
    }



}
