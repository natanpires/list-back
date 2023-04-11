import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceService } from '@/api/devices/device.service';
import { Device } from '@/api/devices/entities/device.entity';

describe('DeviceService', () => {
  const deviceRepositoryToken = getRepositoryToken(Device);
  const typeOrmMock = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
  };

  let service: DeviceService;
  let deviceRepository: Repository<Device>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeviceService,
        {
          provide: deviceRepositoryToken,
          useValue: typeOrmMock,
        },
      ],
    }).compile();

    service = module.get<DeviceService>(DeviceService);
    deviceRepository = module.get<Repository<Device>>(deviceRepositoryToken);
  });

  it('Services should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Repositories should be defined', () => {
    expect(deviceRepository).toBeDefined();
  });
});
