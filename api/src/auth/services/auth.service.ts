import { Injectable } from '@nestjs/common';
import { IAuthService } from './auth.service.interface';
import { UserModel, UserSignUpPayload } from '../models/user.model';

export const AUTH_SERVICE_TOKEN = 'AUTH_SERVICE_TOKEN';

@Injectable()
export class AuthService implements IAuthService {
  saveUser(userPayload: UserSignUpPayload): Promise<boolean> {
    console.log('USER SAVED');
    return new Promise((resolve) => resolve(true));
  }
  findUserByEmail(email: string): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }
}
