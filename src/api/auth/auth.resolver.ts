import {
  Inject,
  ClassSerializerInterceptor,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { User } from '@api/users/entities/user.entity';
import { RegisterDTO, LoginDTO } from './dtos/auth.dto';
import { JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '@/shared/decorators/current-user.decorator';

@Resolver('Auth')
export class AuthResolver {
  constructor(@Inject(AuthService) private readonly service: AuthService) {}

  @Mutation(() => String, { name: 'register' })
  @UseInterceptors(ClassSerializerInterceptor)
  register(@Args('register') args: RegisterDTO): Promise<User | never> {
    return this.service.register(args);
  }

  @Mutation(() => String, { name: 'login' })
  login(@Args('login') args: LoginDTO): Promise<string | never> {
    return this.service.login(args);
  }

  @Mutation(() => String, { name: 'refresh' })
  @UseGuards(JwtAuthGuard)
  refresh(@CurrentUser() user: User): Promise<string | never> {
    return this.service.refresh(user);
  }
}
