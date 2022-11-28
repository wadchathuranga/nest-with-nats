import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Nats Training Projct | Api-Gateway')
    .setDescription(
      'This is the Swagger API ducumentation of Api-Gateway. This one is the base NestJs service of NATS training project',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app
    .listen(4000)
    .then(() => logger.verbose('Api-Gateway Service is runing on PORT: 4000'));
}
bootstrap();
