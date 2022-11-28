"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const logger = new common_1.Logger();
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.NATS,
        options: {
            url: 'nats://localhost:4222',
            queue: 'email-queue',
        },
    });
    await app
        .listen()
        .then(() => logger.verbose('Email Service is listening start'));
}
bootstrap();
//# sourceMappingURL=main.js.map