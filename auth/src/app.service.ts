import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  constructor(
    // mongodb product schema
    @InjectModel('User') private userModel: Model<User>,
    // logger service inject
    @Inject('LOGGER_SERVICE') private readonly loggerClient: ClientProxy,
  ) {}

  // find user by Id
  async findUser(id: string) {
    const user = await this.userModel.findOne({ id: id }).exec();
    this.loggerClient.emit('user.logger.verified', user.id);
    return user;
  }

  // find all users
  async allUsers() {
    const users = await this.userModel.find().exec();
    this.loggerClient.emit('user.logger.getAll', {});
    return users;
  }

  // create user
  async createUser(userDto: UserDto) {
    const user = await new this.userModel(userDto).save();
    this.loggerClient.emit('user.logger.created', user.id);
    return user;
  }
}
