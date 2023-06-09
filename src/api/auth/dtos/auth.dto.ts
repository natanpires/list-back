import { Field, InputType } from '@nestjs/graphql';
import { Trim } from 'class-sanitizer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

@InputType()
export class RegisterDTO {
  @Trim()
  @IsEmail()
  @Field(() => String)
  public readonly email: string;

  @IsString()
  @MinLength(8)
  @Field(() => String)
  public readonly password: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  public readonly name?: string;
}

@InputType()
export class LoginDTO {
  @Trim()
  @IsEmail()
  @Field(() => String)
  public readonly email: string;

  @IsString()
  @MinLength(8)
  @Field(() => String)
  public readonly password: string;
}
