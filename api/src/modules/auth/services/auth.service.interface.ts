import { CreateUserDto } from '../dtos/create-user.dto';
import { UserModel } from '../models/user.model';

export interface IAuthService {
  saveUser(userPayload: CreateUserDto): Promise<boolean>;
  findUserByEmail(email: string): Promise<UserModel>;
}
