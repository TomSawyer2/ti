import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();
