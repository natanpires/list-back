import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/api/users/entities/user.entity';
import { UserService } from '@/api/users/user.service';
import { AuthHelper } from '@/api/auth/auth.helper';
import { AuthModule } from '@/api/auth/auth.module';
import { JwtAuthGuard } from '@/api/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

describe('UserService', () => {
  const userRepositoryToken = getRepositoryToken(User);
  const typeOrmMock = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
  };

  let service: UserService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: userRepositoryToken,
          useValue: typeOrmMock,
        },
        AuthHelper,
        {
          provide: APP_GUARD,
          useClass: JwtAuthGuard,
        },
        JwtService,
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<User>>(userRepositoryToken);
  });

  it('Services should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Repositories should be defined', () => {
    expect(userRepository).toBeDefined();
  });
});
