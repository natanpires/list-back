import { Test, TestingModule } from '@nestjs/testing';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

describe('AppResolver', () => {
  let resolver: AppResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppResolver,
        {
          provide: AppService,
          useFactory: () => ({
            getHealthStatus: jest.fn(() => 'OK!'),
          }),
        },
      ],
    }).compile();
    resolver = module.get<AppResolver>(AppResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return "OK!"', () => {
    expect(resolver.health()).toBe('OK!');
  });
});
