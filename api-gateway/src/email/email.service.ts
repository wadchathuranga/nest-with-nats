import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class EmailService {
  constructor(
    @Inject('EMAIL_SERVICE') private readonly emailClient: ClientProxy,
  ) {}

  // EMAIL
  sendEmail(mail: string, username: string, res: any) {
    return this.emailClient.send('email', { mail, username, res }).pipe(
      map((res) => ({
        ...res,
      })),
    );
  }
}
