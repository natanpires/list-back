import { CartService } from '@api/carts/cart.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cart } from '@/api/carts/entities/cart.entity';
import { Repository } from 'typeorm';
import { DeviceService } from '@/api/devices/device.service';
import { Device } from '@/api/devices/entities/device.entity';

describe('CartService', () => {
  const cartRepositoryToken = getRepositoryToken(Cart);
  const deviceRepositoryToken = getRepositoryToken(Device);
  const typeOrmMock = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
  };

  let service: CartService;
  let deviceService: DeviceService;
  let cartRepository: Repository<Cart>;
  let deviceRepository: Repository<Device>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: cartRepositoryToken,
          useValue: typeOrmMock,
        },
        DeviceService,
        {
          provide: deviceRepositoryToken,
          useValue: typeOrmMock,
        },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
    deviceService = module.get<DeviceService>(DeviceService);

    cartRepository = module.get<Repository<Cart>>(cartRepositoryToken);
    deviceRepository = module.get<Repository<Device>>(deviceRepositoryToken);
  });

  it('Services should be defined', () => {
    expect(service).toBeDefined();
    expect(deviceService).toBeDefined();
  });

  it('Repositories should be defined', () => {
    expect(cartRepository).toBeDefined();
    expect(deviceRepository).toBeDefined();
  });
});
