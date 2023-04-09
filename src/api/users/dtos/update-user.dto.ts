import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateNameDto {
  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  public readonly name?: string;
}
