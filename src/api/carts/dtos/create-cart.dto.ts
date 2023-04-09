import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateCartDTO {
  @Field(() => String, { description: 'Device ID' })
  @IsString()
  deviceId: string;
}
