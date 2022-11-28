import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { EmailDto } from './dto/email.dto';
import { EmailService } from './email.service';

@ApiTags('Email')
@Controller('email')
export class EmailController {
  // constructor
  constructor(private readonly emailService: EmailService) {}

  /**
   * @desc    send email
   * @route   POST /email
   */
  @Post('/')
  @ApiCreatedResponse({
    description: 'Email Sent',
  })
  sendEmail(@Body() body: EmailDto) {
    const { email, username, res } = body;
    return this.emailService.sendEmail(email, username, res);
  }
}
