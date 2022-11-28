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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor(productModel, loggerClient, authClient) {
        this.productModel = productModel;
        this.loggerClient = loggerClient;
        this.authClient = authClient;
    }
    async createProduct(data) {
        const user = await (0, rxjs_1.firstValueFrom)(this.authClient.send('user.verify', data.userId).pipe((0, rxjs_1.map)((res) => ({
            res,
        }))));
        const dt = {
            productId: data.productId,
            productName: data.productName,
            productColor: data.productColor,
            productPrice: data.productPrice,
            productDescription: data.productDescription,
        };
        const product = await new this.productModel(dt).save();
        this.loggerClient.emit('products.logerCreated', product.productId);
        return product;
    }
    async getAllProduct() {
        const products = await this.productModel.find().exec();
        if (products)
            this.loggerClient.emit('products.loger', {});
        return products;
    }
    async getProductById(prodId) {
        const product = await this.productModel
            .findOne({ productId: prodId })
            .exec();
        if (product)
            this.loggerClient.emit(`products.loger.${product.productId}`, {});
        return product;
    }
    async deleteProductById(prodId) {
        const product = await this.productModel
            .findOneAndDelete({ productId: prodId })
            .exec();
        if (product)
            this.loggerClient.emit(`products.loger.${product.productId}.delete`, {});
        return product;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __param(1, (0, common_1.Inject)('LOGGER_SERVICE')),
    __param(2, (0, common_1.Inject)('AUTH_SERVICE')),
    __metadata("design:paramtypes", [mongoose_2.Model, typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map