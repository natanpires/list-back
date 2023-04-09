import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Device } from './entities/device.entity';
import { CreateDeviceDTO } from './dtos/create-device.dto';
import { UpdateDeviceDTO } from './dtos/update-device.dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
  ) {}

  async create(createDeviceInput: CreateDeviceDTO): Promise<Device> {
    const device = this.deviceRepository.create(createDeviceInput);
    return await this.deviceRepository.save(device);
  }

  async findAll(): Promise<Array<Device>> {
    return await this.deviceRepository.find();
  }

  async update(
    id: string,
    updateDeviceInput: UpdateDeviceDTO,
  ): Promise<Device> {
    const device = await this.deviceRepository.preload({
      id,
      ...updateDeviceInput,
    });

    if (!device) throw new NotFoundException(`Device #${id} not found`);
    return this.deviceRepository.save(device);
  }

  async findOne(id: string): Promise<Device> {
    const device = await this.deviceRepository.findOne({
      where: {
        id,
      },
    });

    if (!device) throw new NotFoundException(`Device #${id} not found`);
    return device;
  }

  async remove(id: string): Promise<void> {
    const device = await this.deviceRepository.findOne({ where: { id } });
    await this.deviceRepository.remove(device);
  }
}
