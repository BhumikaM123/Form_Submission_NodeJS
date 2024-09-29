import { IsString, IsArray } from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/addresss.dto';


export class CreateUserDto {
  @IsString()
  name: string;

  @IsArray()
  addresses: CreateAddressDto[];
}
