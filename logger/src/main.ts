import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
      queue: 'logger-queue',
    },
  });
  await app
    .listen()
    .then(() => logger.verbose('Logger Service is listening start'));
}
bootstrap();
