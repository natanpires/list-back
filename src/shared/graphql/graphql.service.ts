import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
class GraphQlConfigService implements GqlOptionsFactory<ApolloDriverConfig> {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground:
        this.configService.get('NODE_ENV') === 'production' ? false : true,
    };
  }
}

export { GraphQlConfigService };
