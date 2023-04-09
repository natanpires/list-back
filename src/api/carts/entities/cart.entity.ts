import { Device } from '@api/devices/entities/device.entity';
import { User } from '@api/users/entities/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ManyToOne, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Cart ID' })
  id: string;

  @ManyToOne(() => Device, (device) => device.id, { eager: true })
  @Field(() => Device, { description: 'Device ID' })
  device: Device;

  @OneToMany(() => User, (user) => user.id, { eager: true })
  @Field(() => User, { description: 'User ID' })
  user: User;
}
