import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    // logger service inject
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  // get all users
  allUsers() {
    return this.authClient.send('user.getAll', {});
  }

  // create user
  createUser(userDto: UserDto) {
    return this.authClient.send('user.create', userDto);
  }
}
