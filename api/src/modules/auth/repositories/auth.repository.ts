import { UserEntity } from 'src/core/entities/user.entity';
import { IAuthRepository } from './auth.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

export const AUTH_REPOSITORY_TOKEN = 'AUTH_REPOSITORY_TOKEN';

export class AuthRepository implements IAuthRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async saveUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userEntity = this.userRepository.create(createUserDto);
    const createdUser = await this.userRepository.save(userEntity);
    return createdUser;
  }

  async findUserByEmail(email: string): Promise<UserEntity | null> {
    const userToFind = await this.userRepository.findOne({ where: { email } });
    return userToFind;
  }
}
