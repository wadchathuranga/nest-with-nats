import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, NatsContext, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // send email
  @EventPattern('email')
  async sendMail(@Payload() data: any, @Ctx() context: NatsContext) {
    const { mail, username, res } = data;
    return this.appService.sendMail(mail, username, res);
  }
}
