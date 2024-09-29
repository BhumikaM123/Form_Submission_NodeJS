/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from './schemas/address.schema';
import { CreateAddressDto } from './dto/addresss.dto';


@Injectable()
export class AddressService {
  constructor(@InjectModel(Address.name) private addressModel: Model<Address>) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const address = new this.addressModel(createAddressDto);
    return address.save();
  }
}
