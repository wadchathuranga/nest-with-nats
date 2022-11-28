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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async createProduct(data) {
        return this.appService.createProduct(data);
    }
    async getAllProduct() {
        return this.appService.getAllProduct();
    }
    async getProductById(data, context) {
        const prodId = context.getSubject().split('.')[1];
        return this.appService.getProductById(prodId);
    }
    async deleteProductById(data, context) {
        const prodId = context.getSubject().split('.')[1];
        return this.appService.deleteProductById(prodId);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('products-create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createProduct", null);
__decorate([
    (0, microservices_1.MessagePattern)('products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllProduct", null);
__decorate([
    (0, microservices_1.MessagePattern)('products.*'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof microservices_1.NatsContext !== "undefined" && microservices_1.NatsContext) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getProductById", null);
__decorate([
    (0, microservices_1.MessagePattern)('products.*.delete'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof microservices_1.NatsContext !== "undefined" && microservices_1.NatsContext) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteProductById", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map