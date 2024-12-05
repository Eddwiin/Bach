import { UserModel, UserSignUpPayload } from '../models/user.model';

export interface IAuthService {
  saveUser(userPayload: UserSignUpPayload): Promise<boolean>;
  findUserByEmail(email: string): Promise<UserModel>;
}
