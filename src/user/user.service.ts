import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

import { Address, AddressDocument } from '../address/schemas/address.schema';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>, // Correctly inject AddressModel
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const addresses = await this.addressModel.insertMany(
      createUserDto.addresses,
    );
    const user = new this.userModel({ name: createUserDto.name, addresses });
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().populate('addresses').exec();
  }
}
