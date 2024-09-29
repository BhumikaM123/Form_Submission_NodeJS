import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Address } from '../../address/schemas/address.schema';

export type UserDocument = User & Document; // Define UserDocument type

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Address' }] })
  addresses: Address[];
}

export const UserSchema = SchemaFactory.createForClass(User);
