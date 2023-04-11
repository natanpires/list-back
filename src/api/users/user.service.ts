import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  UpdateEmailDTO,
  UpdateNameDTO,
  UpdatePasswordDTO,
} from './dtos/update-user.dto';
import { User } from './entities/user.entity';
import { AuthHelper } from '@api/auth/auth.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
    @Inject(AuthHelper)
    private readonly authHelper: AuthHelper,
  ) {}

  public async updateName(
    body: UpdateNameDTO,
    currentUser: User,
  ): Promise<User> {
    currentUser.name = body.name;

    return this.repository.save(currentUser);
  }

  public async updateEmail(
    body: UpdateEmailDTO,
    currentUser: User,
  ): Promise<User> {
    currentUser.email = body.email;

    return this.repository.save(currentUser);
  }

  public async updatePassword(
    body: UpdatePasswordDTO,
    currentUser: User,
  ): Promise<User> {
    if (
      !this.authHelper.isPasswordValid(body.password, body.passwordConfirmation)
    ) {
      throw new UnprocessableEntityException('Unmatched passwords');
    }

    currentUser.password = this.authHelper.encodePassword(body.password);

    return this.repository.save(currentUser);
  }
}
