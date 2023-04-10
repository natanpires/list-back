import { createMock } from '@golevelup/ts-jest';
import { CartService } from '@api/carts/cart.service';

describe('Mocked CartService', () => {
  let serviceMock: CartService;
  beforeEach(async () => {
    serviceMock = createMock<CartService>();
  });

  it('should be defined', () => {
    expect(serviceMock).toBeDefined();
  });
});
