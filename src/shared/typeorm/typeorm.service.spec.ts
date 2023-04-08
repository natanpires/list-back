import { createMock } from '@golevelup/ts-jest';
import { TypeOrmConfigService } from './typeorm.service';

describe('Mocked TypeORM Config Service', () => {
  const typeConfigMock = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['src/**/*.entity.ts'],
    synchronize: true,
  };

  it('should have a fully mocked TypeORM Config Service', () => {
    const serviceMock = createMock<TypeOrmConfigService>();
    expect(serviceMock).toBeDefined();
  });

  it('should return TypeORM options', () => {
    const serviceMock = createMock<TypeOrmConfigService>({
      createTypeOrmOptions: jest.fn().mockReturnValue(typeConfigMock),
    });

    expect(serviceMock.createTypeOrmOptions()).toMatchObject({
      type: 'postgres',
      host: expect.any(String),
      port: expect.any(Number),
      username: expect.any(String),
      password: expect.any(String),
      database: expect.any(String),
      entities: expect.any(Array),
      synchronize: expect.any(Boolean),
    });
  });
});
