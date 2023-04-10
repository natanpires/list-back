import { Test, TestingModule } from '@nestjs/testing';
import { DeviceResolver } from '@api/devices/device.resolver';
import { DeviceService } from '@api/devices/device.service';

describe('DeviceResolver', () => {
  let resolver: DeviceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeviceResolver,
        {
          provide: DeviceService,
          useFactory: () => ({
            getHealthStatus: jest.fn(() => 'OK!'),
          }),
        },
      ],
    }).compile();
    resolver = module.get<DeviceResolver>(DeviceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
