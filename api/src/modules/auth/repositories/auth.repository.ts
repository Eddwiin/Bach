import { InjectModel } from '@nestjs/sequelize';
import { UserEntity } from 'src/core/entities/user.entity';
import { CreateUserDto } from '../models/user.model';
import { IAuthRepository } from './auth.repository.interface';

export const AUTH_REPOSITORY_TOKEN = 'AUTH_REPOSITORY_TOKEN';

export class AuthRepository implements IAuthRepository {
  constructor(
    @InjectModel(UserEntity) private readonly userRepository: typeof UserEntity,
  ) {}

  async saveUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.create(createUserDto);
  }

  async findUserByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findOne();
  }
}
