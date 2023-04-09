import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@api/auth/auth.module';
import { Device } from './entities/device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Device]), AuthModule],
  providers: [DeviceService],
})
export class DeviceModule {}
