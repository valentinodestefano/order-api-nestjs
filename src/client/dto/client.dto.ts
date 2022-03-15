import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateClientDTO {

    @ApiModelProperty({
        description: 'Client Name',
        example: 'Valentino',
    })
    readonly name: string;

    @ApiModelProperty({
        description: 'Client Lastname',
        example: 'Destefano',
    })
    readonly lastname: string;

    @ApiModelProperty({
        description: 'Client email',
        example: 'valentinodestefanod@gmail.com',
    })
    readonly email: string;

    @ApiModelProperty({
        description: 'Client address',
        example: 'Caracas, Venezuela',
    })
    readonly address: string;

    @ApiModelProperty({
        description: 'Client id document',
        example: '26993454',
    })
    readonly clientpersonal_id: string;

}