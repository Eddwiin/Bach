import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AUTH_SERVICE_TOKEN, AuthService } from './services/auth.service';
import {
  AUTH_REPOSITORY_TOKEN,
  AuthRepository,
} from './repositories/auth.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserEntity } from 'src/core/entities/user.entity';

@Module({
  imports: [SequelizeModule.forFeature([UserEntity])],
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
