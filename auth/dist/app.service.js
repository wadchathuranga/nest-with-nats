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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AppService = class AppService {
    constructor(userModel, loggerClient) {
        this.userModel = userModel;
        this.loggerClient = loggerClient;
    }
    async findUser(id) {
        const user = await this.userModel.findOne({ id: id }).exec();
        this.loggerClient.emit('user.logger.verified', user.id);
        return user;
    }
    async allUsers() {
        const users = await this.userModel.find().exec();
        this.loggerClient.emit('user.logger.getAll', {});
        return users;
    }
    async createUser(userDto) {
        const user = await new this.userModel(userDto).save();
        this.loggerClient.emit('user.logger.created', user.id);
        return user;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('User')),
    __param(1, (0, common_1.Inject)('LOGGER_SERVICE')),
    __metadata("design:paramtypes", [mongoose_1.Model, typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map