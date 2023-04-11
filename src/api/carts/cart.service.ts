import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { Cart } from './entities/cart.entity';
import { DeviceService } from '../devices/device.service';
import { CreateCartDTO } from './dtos/create-cart.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    private readonly deviceService: DeviceService,
  ) {}

  async create({ deviceId }: CreateCartDTO, user: User): Promise<Cart> {
    const device = await this.deviceService.findOne(deviceId);

    if (!device.quantity) {
      throw new UnprocessableEntityException('Error adding item to cart!');
    }

    const cart = await this.cartRepository.save({
      device,
      user,
    });

    await this.deviceService.update(deviceId, {
      quantity: device.quantity--,
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

    if (!cart) {
      throw new NotFoundException(`Cart #${id} not found`);
    }
    return cart;
  }

  async remove(cartId: string): Promise<void> {
    const cart = await this.findOne(cartId);

    if (!cart?.device?.id) {
      throw new UnprocessableEntityException('Error removing item from cart!');
    }

    const device = await this.deviceService.findOne(cart.device.id);

    await Promise.all([
      this.deviceService.update(device.id, {
        quantity: device.quantity++,
      }),
      this.cartRepository.remove(cart),
    ]);
  }
}
