import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    }),
  )
  await app.listen(3000);
}
bootstrap();

//whitelist strips off any extra data types so anything other than password and email would not go through
