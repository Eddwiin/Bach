import { UserEntity } from 'src/core/entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

export interface IAuthRepository {
  saveUser(userPayload: CreateUserDto): Promise<UserEntity>;
  findUserByEmail(email: string): Promise<UserEntity | null>;
}
