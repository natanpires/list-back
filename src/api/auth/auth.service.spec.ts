import { createMock } from '@golevelup/ts-jest';
import { AuthService } from './auth.service';

describe('UserService', () => {
  let serviceMock: AuthService;
  beforeEach(async () => {
    serviceMock = createMock<AuthService>();
  });

  it('should be defined', () => {
    expect(serviceMock).toBeDefined();
  });
});
