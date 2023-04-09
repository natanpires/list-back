import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@api/auth/auth.module';
import { Cart } from './entities/cart.entity';
import { CartResolver } from './cart.resolver';
import { DeviceModule } from '@api/devices/device.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cart]), AuthModule, DeviceModule],
  providers: [CartService, CartResolver],
})
export class CartModule {}
