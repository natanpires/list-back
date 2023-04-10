import { createMock } from '@golevelup/ts-jest';
import { UserService } from '@api/users/user.service';

describe('Mocked UserService', () => {
  let serviceMock: UserService;

  beforeEach(async () => {
    serviceMock = createMock<UserService>();
  });

  it('should be defined', () => {
    expect(serviceMock).toBeDefined();
  });
});
