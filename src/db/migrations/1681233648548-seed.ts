import { Device } from '../../api/devices/entities/device.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

const devicesMock = [
  {
    name: 'Apple iPhone 11 Red',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ipsum, aliquet.',
    price: '$699',
    quantity: 12,
  },
  {
    name: 'Apple iPhone 13 Pro Max',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ipsum, aliquet.',
    price: '$1399',
    quantity: 8,
  },
  {
    name: 'Apple iPhone 14',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ipsum, aliquet.',
    price: '$1099',
    quantity: 5,
  },
];

export class Seed1681233648548 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const deviceMock of devicesMock) {
      await queryRunner.manager.create<Device>(Device, deviceMock);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM public.device`);
  }
}
