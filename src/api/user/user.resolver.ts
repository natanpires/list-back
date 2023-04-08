import {
  ClassSerializerInterceptor,
  UseGuards,
  UseInterceptors,
  Inject,
} from '@nestjs/common';
import { JwtAuthGuard } from '@/api/auth/auth.guard';
import { UpdateNameDto } from './user.dto';
import { User } from './user.entity';
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
    @Args('updateNameInput') args: UpdateNameDto,
    @CurrentUser() currentUser: User,
  ): Promise<User> {
    return this.service.updateName(args, currentUser);
  }
}
