import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateNameDto } from './dtos/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  public async updateName(
    body: UpdateNameDto,
    currentUser: User,
  ): Promise<User> {
    const user: User = currentUser;
    user.name = body.name;

    return this.repository.save(user);
  }
}
