import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  public id!: number;

  @Column({ type: 'varchar' })
  @Field(() => String)
  public email!: string;

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'varchar', nullable: true })
  @Field(() => String, { nullable: true })
  public name: string | null;

  @Column({ type: 'timestamp', nullable: true, default: null })
  @Field(() => Date, { nullable: true })
  public lastLoginAt: Date | null;
}
