import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AUTH_SERVICE_TOKEN, AuthService } from './services/auth.service';

@Module({
  controllers: [AuthController],
  providers: [
    {
      provide: AUTH_SERVICE_TOKEN,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
