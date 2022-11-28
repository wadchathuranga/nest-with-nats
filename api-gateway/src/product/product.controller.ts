import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { CreateProductRequestDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface';
import { ProductService } from './product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * @desc    get all products
   * @route   GET /products
   */
  @Get('/')
  @ApiOkResponse({
    description: 'Ok',
    type: [CreateProductRequestDto],
  })
  getAllProducts(): Observable<Product> {
    return this.productService.getAllProduct();
  }

  /**
   * @desc    get product by productId
   * @route   GET /products/:productId
   */
  @Get('/:productId')
  @ApiOkResponse({
    description: 'Ok',
    type: CreateProductRequestDto,
  })
  getProductById(@Param('productId') productId: string): Observable<Product> {
    return this.productService.getProductById(productId);
  }

  /**
   * @desc    create product
   * @route   POST /create-product
   */
  @Post('/create')
  @ApiCreatedResponse({
    description: 'Created',
    type: CreateProductRequestDto,
  })
  createProduct(@Body() createProductRequestDto: CreateProductRequestDto): any {
    return this.productService.createProduct(createProductRequestDto);
  }

  /**
   * @desc    delete product by productId
   * @route   DELETE /products/:productId
   */
  @Delete('/:productId/delete')
  @ApiOkResponse({
    description: 'Ok',
  })
  deleteProductById(
    @Param('productId') productId: string,
  ): Observable<Product> {
    return this.productService.deleteProductById(productId);
  }
}
