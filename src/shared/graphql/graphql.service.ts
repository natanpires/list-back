import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { upperDirectiveTransformer } from './directives/upper-case.directive';
import { join } from 'path';

@Injectable()
class GraphQlConfigService implements GqlOptionsFactory<ApolloDriverConfig> {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      playground: false,
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    };
  }
}

export { GraphQlConfigService };
