import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateDeviceDTO {
  @Field(() => Int, { description: 'Device quantity' })
  @IsNumber()
  quantity: number;

  @Field(() => String, { description: 'Device name' })
  @IsString()
  name: string;

  @Field(() => String, { description: 'Device description' })
  @IsString()
  description: string;

  @Field(() => String, { description: 'Device price' })
  @IsString()
  price: string;
}
