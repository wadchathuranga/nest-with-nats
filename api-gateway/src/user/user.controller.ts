import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  // constructor
  constructor(private userService: UserService) {}

  /**
   * @desc    get all users
   * @route   GET /users
   */
  @Get()
  @ApiOkResponse({
    description: 'Ok',
    type: [UserDto],
  })
  AllUsers() {
    return this.userService.allUsers();
  }

  /**
   * @desc    create user
   * @route   POST /users/create
   */
  @Post('/create')
  @ApiCreatedResponse({
    description: 'Created',
    type: UserDto,
  })
  createUser(@Body() req: UserDto) {
    return this.userService.createUser(req);
  }
}
