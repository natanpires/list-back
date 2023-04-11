import { Test, TestingModule } from '@nestjs/testing';
import { CartResolver } from '@api/carts/cart.resolver';
import { CartService } from '@api/carts/cart.service';

describe('CartResolver', () => {
  let resolver: CartResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartResolver,
        {
          provide: CartService,
          useValue: {},
        },
      ],
    }).compile();
    resolver = module.get<CartResolver>(CartResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
