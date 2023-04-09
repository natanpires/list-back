import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@api/auth/auth.module';
import { Device } from './entities/device.entity';
import { DeviceResolver } from './device.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Device]), AuthModule],
  exports: [DeviceService],
  providers: [DeviceService, DeviceResolver],
})
export class DeviceModule {}
