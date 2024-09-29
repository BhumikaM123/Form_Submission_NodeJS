import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User, UserSchema } from './schemas/user.schema';
import { AddressModule } from '../address/address.module'; // Adjust the path if necessary
import { UserController } from './user.controller'; // Ensure this import

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AddressModule, // Ensure this is imported
  ],
  controllers: [UserController], // Register the UserController here
  providers: [UserService],
  exports: [MongooseModule],
})
export class UserModule {}
