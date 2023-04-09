import { UserService } from './user.service';
import { createMock } from '@golevelup/ts-jest';

describe('UserService', () => {
  let serviceMock: UserService;

  beforeEach(async () => {
    serviceMock = createMock<UserService>();
  });

  it('should be defined', () => {
    expect(serviceMock).toBeDefined();
  });
});
