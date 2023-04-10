import { Device } from '@api/devices/entities/device.entity';
import { User } from '@api/users/entities/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ManyToOne, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Device, (device) => device.id, { eager: true })
  @Field(() => Device)
  device: Device;

  @ManyToOne(() => User, (user) => user.cart)
  @Field(() => User)
  user: User;
}
