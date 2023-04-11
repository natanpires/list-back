import {
  ClassSerializerInterceptor,
  UseGuards,
  UseInterceptors,
  Inject,
} from '@nestjs/common';
import { JwtAuthGuard } from '@api/auth/auth.guard';
import {
  UpdateNameDTO,
  UpdateEmailDTO,
  UpdatePasswordDTO,
} from './dtos/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '@/shared/decorators/current-user.decorator';

@Resolver('User')
export class UserResolver {
  constructor(@Inject(UserService) private readonly service: UserService) {}

  @Mutation(() => User, { name: 'updateName' })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  updateName(
    @Args('updateNameInput') args: UpdateNameDTO,
    @CurrentUser() currentUser: User,
  ): Promise<User> {
    return this.service.updateName(args, currentUser);
  }

  @Mutation(() => User, { name: 'updateEmail' })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  updateEmail(
    @Args('updateEmailInput') args: UpdateEmailDTO,
    @CurrentUser() currentUser: User,
  ): Promise<User> {
    return this.service.updateEmail(args, currentUser);
  }

  @Mutation(() => User, { name: 'updatePassword' })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  updatePassword(
    @Args('updatePasswordInput') args: UpdatePasswordDTO,
    @CurrentUser() currentUser: User,
  ): Promise<User> {
    return this.service.updatePassword(args, currentUser);
  }
}
