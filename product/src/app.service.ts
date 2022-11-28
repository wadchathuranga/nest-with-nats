import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { firstValueFrom, map } from 'rxjs';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schemas/product.schema';

@Injectable()
export class AppService {
  // constructor
  constructor(
    // mongodb product schema
    @InjectModel('Product') private productModel: Model<Product>,
    // logger service inject
    @Inject('LOGGER_SERVICE') private readonly loggerClient: ClientProxy,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  /**
   * create product
   */
  async createProduct(data: CreateProductDto): Promise<any> {
    const user = await firstValueFrom(
      this.authClient.send('user.verify', data.userId).pipe(
        map((res) => ({
          res,
        })),
      ),
    );

    const dt = {
      productId: data.productId,
      productName: data.productName,
      productColor: data.productColor,
      productPrice: data.productPrice,
      productDescription: data.productDescription,
    };

    const product = await new this.productModel(dt).save();
    this.loggerClient.emit('products.logerCreated', product.productId);
    return product;
  }

  /**
   * get all products
   */
  async getAllProduct(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    if (products) this.loggerClient.emit('products.loger', {});
    return products;
  }

  /**
   * get product by productId
   */
  async getProductById(prodId: string): Promise<Product> {
    const product = await this.productModel
      .findOne({ productId: prodId })
      .exec();
    if (product)
      this.loggerClient.emit(`products.loger.${product.productId}`, {});
    return product;
  }

  /**
   * delete product by productId
   */
  async deleteProductById(prodId: string): Promise<any> {
    const product = await this.productModel
      .findOneAndDelete({ productId: prodId })
      .exec();
    if (product)
      this.loggerClient.emit(`products.loger.${product.productId}.delete`, {});
    return product;
  }
}
