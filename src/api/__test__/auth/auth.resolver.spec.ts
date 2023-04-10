import { Test, TestingModule } from '@nestjs/testing';
import { AuthResolver } from '@api/auth/auth.resolver';
import { AuthService } from '@api/auth/auth.service';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        {
          provide: AuthService,
          useFactory: () => ({
            getHealthStatus: jest.fn(() => 'OK!'),
          }),
        },
      ],
    }).compile();
    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
