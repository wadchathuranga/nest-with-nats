import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, NatsContext, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ------------------------------ PRODUCTS -----------------------------------------

  // product created
  @EventPattern('products.logerCreated')
  createProduct(@Payload() dataPayload: any) {
    return this.appService.createProduct(dataPayload);
  }

  // get all products
  @EventPattern('products.loger')
  getAllProduct(@Payload() dataPayload: any) {
    return this.appService.getAllProduct();
  }

  // get all products
  @EventPattern('products.loger.*')
  getProductById(@Payload() dataPayload: any, @Ctx() context: NatsContext) {
    return this.appService.getProductById(context.getSubject().split('.')[2]);
  }

  // delete product by Id
  @EventPattern('products.loger.*.delete')
  deleteProductById(@Payload() dataPayload: any, @Ctx() context: NatsContext) {
    return this.appService.deleteProductById(
      context.getSubject().split('.')[2],
    );
  }

  // ------------------------------- EMAIL ---------------------------------------------

  // email sent
  @EventPattern('email.sent')
  emailSent(@Payload() dataPayload: any, @Ctx() context: NatsContext) {
    return this.appService.emailSent(dataPayload);
  }

  // -------------------------------- USERS -----------------------------------------------

  // user verified
  @EventPattern('user.logger.verified')
  userVerify(@Payload() dataPayload: any, @Ctx() context: NatsContext) {
    return this.appService.userVerify(dataPayload);
  }

  // get all users
  @EventPattern('user.logger.getAll')
  getAllUsers(@Payload() dataPayload: any, @Ctx() context: NatsContext) {
    return this.appService.getAllUsers();
  }

  // get all users
  @EventPattern('user.logger.created')
  createUser(@Payload() dataPayload: any, @Ctx() context: NatsContext) {
    return this.appService.createUser(dataPayload);
  }
}
