import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DeviceService } from './device.service';

import { Device } from './entities/device.entity';
import { CreateDeviceDTO } from './dtos/create-device.dto';
import { UpdateDeviceDTO } from './dtos/update-device.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@api/auth/auth.guard';

@Resolver('Device')
@UseGuards(JwtAuthGuard)
export class DeviceResolver {
  constructor(private readonly deviceService: DeviceService) {}

  @Mutation(() => Device, { name: 'createDevice' })
  createDevice(@Args('createDeviceInput') args: CreateDeviceDTO) {
    return this.deviceService.create(args);
  }

  @Query(() => [Device], { name: 'getDevices' })
  findAll() {
    return this.deviceService.findAll();
  }

  @Query(() => Device, { name: 'getDevice' })
  findOne(@Args('id', { type: () => String }) deviceId: string) {
    return this.deviceService.findOne(deviceId);
  }

  @Mutation(() => Device, { name: 'updateDevice' })
  updateDevice(
    @Args('id', { type: () => String }) deviceId: string,
    @Args('updateDeviceInput') updateDeviceInput: UpdateDeviceDTO,
  ) {
    return this.deviceService.update(deviceId, updateDeviceInput);
  }

  @Mutation(() => Device, { name: 'removeDevice', nullable: true })
  removeDevice(@Args('id', { type: () => String }) deviceId: string) {
    return this.deviceService.remove(deviceId);
  }
}
