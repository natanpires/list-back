import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

@Injectable()
class TypeOrmConfigService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return typeOrmConfig;
  }
}

export { TypeOrmConfigService };
