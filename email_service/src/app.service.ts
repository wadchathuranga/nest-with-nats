import { Inject, Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ClientProxy } from '@nestjs/microservices';
import { join } from 'path';

@Injectable()
export class AppService {
  // logger
  private logger;
  // constructor
  constructor(
    @Inject('LOGGER_SERVICE') private readonly loggerClient: ClientProxy,
    private readonly mailerService: MailerService,
  ) {
    this.logger = new Logger();
  }

  // send email
  async sendMail(email: string, username: string, res) {
    return this.mailerService
      .sendMail({
        to: email, // list of receivers
        from: 'dilhan@bridgetechlabs.com', // sender address
        subject: 'NestJs Email Sending, donot-replay', // Subject line
        template: 'index', // The `.pug` or `.hbs` extension is appended automatically.
        // Data to be sent to template engine.
        context: {
          code: res._id,
          username: username,
          prodId: res.productId,
          prodName: res.productName,
        },
      })
      .then((res) => {
        this.loggerClient.emit('email.sent', res.envelope.to[0]); // set logger service
        return res;
      })
      .catch((err) => {
        this.logger.warn(err);
      });
  }
}
