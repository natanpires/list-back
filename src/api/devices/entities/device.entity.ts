import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Device {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: 'int', default: 0 })
  @Field(() => Int, { defaultValue: 0 })
  quantity: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Field(() => String)
  name: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  description: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field(() => String)
  price: string;
}
