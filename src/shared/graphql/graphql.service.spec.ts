import { createMock } from '@golevelup/ts-jest';
import { GraphQlConfigService } from './graphql.service';

describe('Mocked GraphQL Config Service', () => {
  let serviceMock: GraphQlConfigService;

  beforeEach(async () => {
    serviceMock = createMock<GraphQlConfigService>({
      createGqlOptions: jest.fn().mockReturnValue({
        autoSchemaFile: './schema.gql',
        playground: false,
        installSubscriptionHandlers: true,
        transformSchema: jest.fn(),
        plugins: [jest.fn()],
      }),
    });
  });

  it('should have a fully mocked GraphQL Config Service', () => {
    expect(serviceMock).toBeDefined();
  });

  it('should return GraphQL options', () => {
    expect(serviceMock.createGqlOptions()).toMatchObject({
      autoSchemaFile: expect.any(String),
      installSubscriptionHandlers: expect.any(Boolean),
      playground: expect.any(Boolean),
      transformSchema: expect.any(Function),
      plugins: expect.any(Array),
    });
  });
});
