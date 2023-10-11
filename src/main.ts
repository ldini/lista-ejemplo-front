import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:['http://localhost:3002','http://192.168.0.9:3002'],
    methods:'GET,PUT,POST,DELETE,PATH',
    credentials: true
  });
  await app.listen(3000);
}
bootstrap();
