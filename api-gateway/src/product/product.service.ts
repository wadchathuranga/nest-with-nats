import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, map, Observable } from 'rxjs';
import { CreateProductRequestDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
  // constructor
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
    @Inject('EMAIL_SERVICE') private readonly emailClient: ClientProxy,
  ) {}

  // get all products
  getAllProduct(): Observable<Product> {
    // const res = this.productClient.send('products', {}).pipe(
    //   map((res) => ({
    //     ...res,
    //   })),
    // );
    const res = this.productClient.send('products', {});
    return res;
  }

  // get product by productId
  getProductById(productId): Observable<Product> {
    const res = this.productClient.send(`products.${productId}`, {});
    return res;
  }

  // create product with send email
  async createProduct(
    createProductRequestDto: CreateProductRequestDto,
  ): Promise<any> {
    const mail = 'infowadc@gmail.com';
    const username = 'Dilshan';

    // "firstValueFrom" for avoid entire code paralaly running
    const ress = await firstValueFrom(
      this.productClient.send('products-create', createProductRequestDto).pipe(
        map((res) => {
          if (res) this.emailClient.emit('email', { mail, username, res });
          return res;
        }),
      ),
    );
    return ress;
  }

  // delete product by productId
  deleteProductById(productId): Observable<Product> {
    const res = this.productClient.send(`products.${productId}.delete`, {});
    return res;
  }
}
