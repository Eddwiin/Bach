import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AUTH_SERVICE_TOKEN, AuthService } from './services/auth.service';
import {
  AUTH_REPOSITORY_TOKEN,
  AuthRepository,
} from './repositories/auth.repository';
import { UserEntity } from 'src/core/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [
    {
      provide: AUTH_SERVICE_TOKEN,
      useClass: AuthService,
    },
    {
      provide: AUTH_REPOSITORY_TOKEN,
      useClass: AuthRepository,
    },
  ],
})
export class AuthModule {}
