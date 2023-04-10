import { createMock } from '@golevelup/ts-jest';
import { DeviceService } from '@api/devices/device.service';

describe('Mocked DeviceService', () => {
  let serviceMock: DeviceService;
  beforeEach(async () => {
    serviceMock = createMock<DeviceService>();
  });

  it('should be defined', () => {
    expect(serviceMock).toBeDefined();
  });
});
