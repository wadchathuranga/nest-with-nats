import { ClientProxy } from '@nestjs/microservices';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schemas/product.schema';
export declare class AppService {
    private productModel;
    private readonly loggerClient;
    private readonly authClient;
    constructor(productModel: Model<Product>, loggerClient: ClientProxy, authClient: ClientProxy);
    createProduct(data: CreateProductDto): Promise<any>;
    getAllProduct(): Promise<Product[]>;
    getProductById(prodId: string): Promise<Product>;
    deleteProductById(prodId: string): Promise<any>;
}
