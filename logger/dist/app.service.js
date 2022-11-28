"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.logger = new common_1.Logger();
    }
    createProduct(data) {
        this.logger.verbose(`PRODUCT_CREATED : ${data}`);
    }
    getAllProduct() {
        this.logger.verbose(`PRODUCT_FETCHED : all`);
    }
    getProductById(data) {
        this.logger.verbose(`PRODUCT_FETCHED : ${data}`);
    }
    deleteProductById(data) {
        this.logger.verbose(`PRODUCT_DELETED : ${data}`);
    }
    emailSent(data) {
        this.logger.verbose(`EMAIL_WAS SEND : ${data}`);
    }
    userVerify(data) {
        this.logger.verbose(`USER_VERIFIED : ${data}`);
    }
    getAllUsers() {
        this.logger.verbose(`USER_FETCHED : all`);
    }
    createUser(data) {
        this.logger.verbose(`USER_CREATED : ${data}`);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map