import { createMock } from '@golevelup/ts-jest';
import { GraphQlConfigService } from './graphql.service';

describe('Mocked GraphQL Config Service', () => {
  const gqlConfigMock = {
    autoSchemaFile: './schema.gql',
    playground: true,
  };

  it('should have a fully mocked GraphQL Config Service', () => {
    const serviceMock = createMock<GraphQlConfigService>();
    expect(serviceMock).toBeDefined();
  });

  it('should return GraphQL options', () => {
    const serviceMock = createMock<GraphQlConfigService>({
      createGqlOptions: jest.fn().mockReturnValue(gqlConfigMock),
    });

    expect(serviceMock.createGqlOptions()).toMatchObject({
      autoSchemaFile: expect.any(String),
      playground: expect.any(Boolean),
    });
  });
});