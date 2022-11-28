import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { Product } from './schemas/product.schema';

@Controller()
export class AppController {
  // constructor
  constructor(private readonly appService: AppService) {}

  // create product
  @MessagePattern('products-create')
  async createProduct(@Payload() data): Promise<any> {
    return this.appService.createProduct(data);
  }

  // get all products
  @MessagePattern('products')
  async getAllProduct(): Promise<Product[]> {
    return this.appService.getAllProduct();
  }

  // get product by productId
  @MessagePattern('products.*') // Here use wildcard subcriber
  async getProductById(
    @Payload() data: any,
    @Ctx() context: NatsContext,
  ): Promise<Product> {
    const prodId = context.getSubject().split('.')[1]; // extract productId from subject/topic
    return this.appService.getProductById(prodId);
  }

  // delete product by productId
  @MessagePattern('products.*.delete') // Here use wildcard subcriber
  async deleteProductById(
    @Payload() data: any,
    @Ctx() context: NatsContext,
  ): Promise<any> {
    const prodId = context.getSubject().split('.')[1]; // extract productId from subject/topic
    return this.appService.deleteProductById(prodId);
  }
}
