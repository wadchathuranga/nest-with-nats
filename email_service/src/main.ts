import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.NATS,
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
