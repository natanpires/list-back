import { createMock } from '@golevelup/ts-jest';
import { AuthService } from '@api/auth/auth.service';

describe('Mocked AuthService', () => {
  let serviceMock: AuthService;
  beforeEach(async () => {
    serviceMock = createMock<AuthService>();
  });

  it('should be defined', () => {
    expect(serviceMock).toBeDefined();
  });
});
