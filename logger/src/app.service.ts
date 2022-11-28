import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger = new Logger();

  // ------------------------------ PRODUCTS -----------------------------------------

  // create product
  createProduct(data: any) {
    this.logger.verbose(`PRODUCT_CREATED : ${data}`);
  }

  // get all products
  getAllProduct() {
    this.logger.verbose(`PRODUCT_FETCHED : all`);
  }

  // get product by Id
  getProductById(data: any) {
    this.logger.verbose(`PRODUCT_FETCHED : ${data}`);
  }

  // delete product by Id
  deleteProductById(data: any) {
    this.logger.verbose(`PRODUCT_DELETED : ${data}`);
  }

  // ------------------------------- EMAIL ---------------------------------------------

  // email sent
  emailSent(data: any) {
    this.logger.verbose(`EMAIL_WAS SEND : ${data}`);
  }

  // -------------------------------- USERS -----------------------------------------------

  // user exists
  userVerify(data: any) {
    this.logger.verbose(`USER_VERIFIED : ${data}`);
  }

  // user exists
  getAllUsers() {
    this.logger.verbose(`USER_FETCHED : all`);
  }

  // create user
  createUser(data: any) {
    this.logger.verbose(`USER_CREATED : ${data}`);
  }
}
