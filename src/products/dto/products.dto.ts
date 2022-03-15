import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateProductDTO {

    @ApiModelProperty({
        description: 'Product Name',
        example: 'iPhone 13 Pro Max',
    })
    readonly name: string;

    @ApiModelProperty({
        description: 'Product price',
        example: '1500',
    })
    readonly price: number;

    @ApiModelProperty({
        description: 'Product image url',
        example: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346280',
    })
    readonly url_image: string;

    @ApiModelProperty({
        description: 'Product serie number',
        example: 'ad4a5da4d',
    })
    readonly serie_number: string;

}