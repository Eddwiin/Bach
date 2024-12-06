import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { databaseProviders } from './core/config/database.config';

@Module({
  imports: [AuthModule, ConfigModule.forRoot()],
  providers: [...databaseProviders],
})
export class AppModule {}
