import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // user verified
  @MessagePattern('user.verify')
  findUser(id: string) {
    return this.appService.findUser(id);
  }

  // get all users
  @MessagePattern('user.getAll')
  AllUsers() {
    return this.appService.allUsers();
  }

  // create user
  @MessagePattern('user.create')
  createUser(@Payload() req: UserDto) {
    return this.appService.createUser(req);
  }
}
