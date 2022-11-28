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
const mailer_1 = require("@nestjs-modules/mailer");
const microservices_1 = require("@nestjs/microservices");
let AppService = class AppService {
    constructor(loggerClient, mailerService) {
        this.loggerClient = loggerClient;
        this.mailerService = mailerService;
        this.logger = new common_1.Logger();
    }
    async sendMail(email, username, res) {
        return this.mailerService
            .sendMail({
            to: email,
            from: 'dilhan@bridgetechlabs.com',
            subject: 'NestJs Email Sending, donot-replay',
            template: 'index',
            context: {
                code: res._id,
                username: username,
                prodId: res.productId,
                prodName: res.productName,
            },
        })
            .then((res) => {
            this.loggerClient.emit('email.sent', res.envelope.to[0]);
            return res;
        })
            .catch((err) => {
            this.logger.warn(err);
        });
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('LOGGER_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _b : Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map