import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { Cart } from './entities/cart.entity';
import { DeviceService } from '../devices/device.service';
import { UserService } from '../users/user.service';
import { CreateCartDTO } from './dtos/create-cart.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    private readonly deviceService: DeviceService,
    private readonly userService: UserService,
  ) {}

  async create({ deviceId }: CreateCartDTO, user: User): Promise<Cart> {
    const device = await this.deviceService.findOne(deviceId);

    if (device.quantity === 0) {
      throw new UnprocessableEntityException('Error adding item to cart!');
    }

    const cart = await this.cartRepository.save({
      device,
      user,
    });

    await this.deviceService.update(deviceId, {
      quantity: device.quantity - 1,
    });

    return cart;
  }

  async findAll(): Promise<Array<Cart>> {
    return await this.cartRepository.find();
  }

  async findOne(id: string): Promise<Cart> {
    const cart = await this.cartRepository.findOne({
      where: {
        id,
      },
    });

    if (!cart) throw new NotFoundException(`Cart #${id} not found`);
    return cart;
  }

  async remove(id: string): Promise<void> {
    const cart = await this.findOne(id);
    const device = await this.deviceService.findOne(cart.device.id);

    await Promise.all([
      this.deviceService.update(device.id, {
        quantity: device.quantity + 1,
      }),
      await this.cartRepository.remove(cart),
    ]);
  }
}
