import { MailerModule } from '@nestjs-modules/mailer';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from 'src/order/schema/order.schema';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { OrderService } from 'src/order/order.service';
import { join } from 'path';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: 'EMAILHERE',
          pass: 'PASSWORD EMAIL',
        },
      },
      defaults: {
        from: '"No Reply" <EMAILHERE>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), 
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [OrderService],
  exports: [OrderService], 
})
export class MailModule {}
