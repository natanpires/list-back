import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

config();

const configService = new ConfigService();

const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DATABASE'),
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/db/migrations/*.{ts,js}'],
  migrationsTableName: 'typeorm_migrations',
  migrationsRun: true, // Can be configures to run migrations on app start, but not recommended in production.
  logger: 'file',
  synchronize: configService.get('NODE_ENV') === 'production' ? false : true, // never use TRUE in production!
};

const dataSource = new DataSource(typeOrmConfig);

export { typeOrmConfig, dataSource };
