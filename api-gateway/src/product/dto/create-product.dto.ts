import { ApiProperty } from '@nestjs/swagger';

export class CreateProductRequestDto {
  @ApiProperty({
    description: 'User Id',
    example: 'user001',
  })
  userId: string;

  @ApiProperty({
    description: 'Product Id',
    example: 'prod21',
  })
  productId: string;

  @ApiProperty({
    description: 'Product Name',
    example: 'Smart Watch',
  })
  productName: string;

  @ApiProperty({
    description: 'Product Color',
    example: 'Black',
  })
  productColor: string;

  @ApiProperty({
    description: 'Product Price',
    example: '8,500',
  })
  productPrice: string;

  @ApiProperty({
    description: 'Product Description',
    example: 'Made in China. 03 Month warranty availble',
  })
  productDescription: string;
}
