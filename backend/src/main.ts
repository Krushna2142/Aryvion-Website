import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const CORS={
  origin:[
   "http://localhost:3000",
   "http://localhost:3001",
   "https://aryvion.com",
   "https://www.aryvion.com"
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(CORS);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
