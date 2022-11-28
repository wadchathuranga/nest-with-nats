"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    createProduct(dataPayload) {
        return this.appService.createProduct(dataPayload);
    }
    getAllProduct(dataPayload) {
        return this.appService.getAllProduct();
    }
    getProductById(dataPayload, context) {
        return this.appService.getProductById(context.getSubject().split('.')[2]);
    }
    deleteProductById(dataPayload, context) {
        return this.appService.deleteProductById(context.getSubject().split('.')[2]);
    }
    emailSent(dataPayload, context) {
        return this.appService.emailSent(dataPayload);
    }
    userVerify(dataPayload, context) {
        return this.appService.userVerify(dataPayload);
    }
    getAllUsers(dataPayload, context) {
        return this.appService.getAllUsers();
    }
    createUser(dataPayload, context) {
        return this.appService.createUser(dataPayload);
    }
};
__decorate([
    (0, microservices_1.EventPattern)('products.logerCreated'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createProduct", null);
__decorate([
    (0, microservices_1.EventPattern)('products.loger'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllProduct", null);
__decorate([
    (0, microservices_1.EventPattern)('products.loger.*'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof microservices_1.NatsContext !== "undefined" && microservices_1.NatsContext) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProductById", null);
__decorate([
    (0, microservices_1.EventPattern)('products.loger.*.delete'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof microservices_1.NatsContext !== "undefined" && microservices_1.NatsContext) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteProductById", null);
__decorate([
    (0, microservices_1.EventPattern)('email.sent'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof microservices_1.NatsContext !== "undefined" && microservices_1.NatsContext) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "emailSent", null);
__decorate([
    (0, microservices_1.EventPattern)('user.logger.verified'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof microservices_1.NatsContext !== "undefined" && microservices_1.NatsContext) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "userVerify", null);
__decorate([
    (0, microservices_1.EventPattern)('user.logger.getAll'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_e = typeof microservices_1.NatsContext !== "undefined" && microservices_1.NatsContext) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllUsers", null);
__decorate([
    (0, microservices_1.EventPattern)('user.logger.created'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_f = typeof microservices_1.NatsContext !== "undefined" && microservices_1.NatsContext) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createUser", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map