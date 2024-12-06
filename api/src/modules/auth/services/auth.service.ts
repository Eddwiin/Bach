import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './auth.service.interface';
import { UserModel } from '../models/user.model';
import { IAuthRepository } from '../repositories/auth.repository.interface';
import { AUTH_REPOSITORY_TOKEN } from '../repositories/auth.repository';
import { CreateUserDto } from '../dtos/create-user.dto';

export const AUTH_SERVICE_TOKEN = 'AUTH_SERVICE_TOKEN';

@Injectable()
export class AuthService implements IAuthService {
  private readonly _authRepository: IAuthRepository;

  constructor(
    @Inject(AUTH_REPOSITORY_TOKEN)
    private readonly authRepository: IAuthRepository,
  ) {
    this._authRepository = authRepository;
  }

  async saveUser(createUserDto: CreateUserDto): Promise<boolean> {
    const userToSave = await this.authRepository.saveUser(createUserDto);
    return !!userToSave;
  }

  findUserByEmail(email: string): Promise<UserModel> {
    return this.authRepository.findUserByEmail(email);
  }
}
