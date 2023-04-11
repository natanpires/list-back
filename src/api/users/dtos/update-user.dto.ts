import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateNameDTO {
  @IsString()
  @Field(() => String)
  public readonly name?: string;
}

@InputType()
export class UpdateEmailDTO {
  @IsString()
  @Field(() => String)
  public readonly email?: string;
}

@InputType()
export class UpdatePasswordDTO {
  @IsString()
  @Field(() => String)
  public readonly password?: string;

  @IsString()
  @Field(() => String)
  public readonly passwordConfirmation?: string;
}
