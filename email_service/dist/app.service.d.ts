import { MailerService } from '@nestjs-modules/mailer';
import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private readonly loggerClient;
    private readonly mailerService;
    private logger;
    constructor(loggerClient: ClientProxy, mailerService: MailerService);
    sendMail(email: string, username: string, res: any): Promise<any>;
}
