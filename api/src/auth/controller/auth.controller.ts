import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AUTH_SERVICE_TOKEN } from '../services/auth.service';
import { IAuthService } from '../services/auth.service.interface';
import { UserSignUpPayload } from '../models/user.model';

@Controller('auth')
export class AuthController {
  private readonly _authService: IAuthService;

  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private readonly authService: IAuthService,
  ) {
    this._authService = authService;
  }

  @Post('sign-up')
  signUp(@Body() userPayload: UserSignUpPayload) {
    if (!this.instanceOfUserSignUpPayload(userPayload))
      throw new Error('User payload is empty or not correct');

    this.authService.saveUser(userPayload);
  }

  private instanceOfUserSignUpPayload(
    payload: UserSignUpPayload,
  ): payload is UserSignUpPayload {
    return (
      payload &&
      typeof payload === 'object' &&
      'firstName' in payload &&
      'lastName' in payload &&
      'email' in payload &&
      'password' in payload &&
      typeof payload.firstName === 'string' &&
      typeof payload.lastName === 'string' &&
      typeof payload.email === 'string' &&
      typeof payload.password === 'string'
    );
  }
}
