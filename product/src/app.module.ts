import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // mongodb connect
    MongooseModule.forRoot('mongodb://localhost:27017/nest_with_nats', {
      useNewUrlParser: true,
    }),
    // mongo product schema connect
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    // logger service connects
    ClientsModule.register([
      {
        name: 'LOGGER_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
          queue: 'logger-queue',
        },
      },
      {
        name: 'AUTH_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
          queue: 'auth-queue',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
