import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';

@InputType()
export class UpdateDeviceDTO {
  @Field(() => Int, { description: 'Device quantity' })
  @IsNumber()
  @IsOptional()
  quantity: number;
}
