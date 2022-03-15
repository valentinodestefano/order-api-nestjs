import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://USERNAME:PASSWORD@cluster0.hqhas.mongodb.net/DATABASENAME?retryWrites=true&w=majority'), ClientModule, ProductsModule, OrderModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
