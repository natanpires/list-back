import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from '@api/users/user.resolver';
import { UserService } from '@api/users/user.service';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useFactory: () => ({
            getHealthStatus: jest.fn(() => 'OK!'),
          }),
        },
      ],
    }).compile();
    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
