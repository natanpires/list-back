import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './carts/cart.module';
import { DeviceModule } from './devices/device.module';

@Module({
  imports: [UserModule, AuthModule, CartModule, DeviceModule],
})
export class ApiModule {}
