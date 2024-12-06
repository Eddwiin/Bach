import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log('process.env.PORT', process.env.PORT);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:5173'],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
