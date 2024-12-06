import {
  Body,
  Controller,
  HttpCode,
  Inject,
  Post,
  InternalServerErrorException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { AUTH_SERVICE_TOKEN } from '../services/auth.service';
import { IAuthService } from '../services/auth.service.interface';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  private readonly _authService: IAuthService;

  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private readonly authService: IAuthService,
  ) {
    this._authService = authService;
  }

  @Post('sign-up')
  @HttpCode(201)
  async signUp(@Body() createUserDto: CreateUserDto) {
    if (!this.instanceOfCreateUserDto(createUserDto))
      throw new BadRequestException('User payload is empty or not correct');

    const userExist = await this.authService.findUserByEmail(
      createUserDto.email,
    );

    if (userExist)
      throw new ConflictException('User email already exists in database');

    const userToSave = await this.authService.saveUser(createUserDto);

    if (!userToSave)
      throw new InternalServerErrorException('Failed to save user');

    return { message: 'User successfully created' };
  }

  private instanceOfCreateUserDto(
    payload: CreateUserDto,
  ): payload is CreateUserDto {
    return (
      payload &&
      typeof payload === 'object' &&
      'firstName' in payload &&
      'lastName' in payload &&
      'email' in payload &&
      'password' in payload
    );
  }
}
