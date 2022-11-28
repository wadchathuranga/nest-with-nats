import { NatsContext } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Product } from './schemas/product.schema';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createProduct(data: any): Promise<any>;
    getAllProduct(): Promise<Product[]>;
    getProductById(data: any, context: NatsContext): Promise<Product>;
    deleteProductById(data: any, context: NatsContext): Promise<any>;
}
