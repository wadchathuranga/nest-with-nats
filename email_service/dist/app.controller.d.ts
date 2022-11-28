import { AppService } from './app.service';
import { NatsContext } from '@nestjs/microservices';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendMail(data: any, context: NatsContext): Promise<any>;
}
