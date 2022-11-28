import { NatsContext } from '@nestjs/microservices';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createProduct(dataPayload: any): void;
    getAllProduct(dataPayload: any): void;
    getProductById(dataPayload: any, context: NatsContext): void;
    deleteProductById(dataPayload: any, context: NatsContext): void;
    emailSent(dataPayload: any, context: NatsContext): void;
    userVerify(dataPayload: any, context: NatsContext): void;
    getAllUsers(dataPayload: any, context: NatsContext): void;
    createUser(dataPayload: any, context: NatsContext): void;
}
