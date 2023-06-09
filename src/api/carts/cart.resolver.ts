import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { Cart } from './entities/cart.entity';
import { CreateCartDTO } from './dtos/create-cart.dto';
import { CurrentUser } from '@/shared/decorators/current-user.decorator';
import { User } from '@api/users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@api/auth/auth.guard';

@Resolver('Cart')
@UseGuards(JwtAuthGuard)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Mutation(() => Cart, { name: 'createCart' })
  createCart(
    @Args('createCartInput') createCartInput: CreateCartDTO,
    @CurrentUser() user: User,
  ) {
    return this.cartService.create(createCartInput, user);
  }

  @Query(() => [Cart], { name: 'getCarts' })
  findAll() {
    return this.cartService.findAll();
  }

  @Query(() => Cart, { name: 'getCart' })
  findOne(@Args('id', { type: () => String }) cartId: string) {
    return this.cartService.findOne(cartId);
  }

  @Mutation(() => Cart, { nullable: true, name: 'removeCart' })
  removeCart(@Args('id', { type: () => String }) cartId: string) {
    return this.cartService.remove(cartId);
  }
}
