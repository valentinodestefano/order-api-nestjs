import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateOrderDTO {

    @ApiModelProperty({
        description: 'order date',
        example: '2022-03-15',
    })
    readonly created_at: Date;

    @ApiModelProperty({
        description: 'order id',
        example: '4635932d323aw',
    })
    readonly order_id: string;

    @ApiModelProperty({
        description: 'order status',
        example: 'no confirmed',
    })
    readonly status: string;

    @ApiModelProperty({
        description: 'order products',
        example: '',
    })
    readonly products: string[];

    @ApiModelProperty({
        description: 'order client',
        example: '',
    })
    readonly client: string[];


}
