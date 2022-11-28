import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { EmailModule } from './email/email.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule, EmailModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
