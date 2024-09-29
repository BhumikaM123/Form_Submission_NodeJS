import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-form'),
    UserModule,
    AddressModule,
  ],
})
export class AppModule {}
