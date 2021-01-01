import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ClusterService from "./cluster.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(80);
}

bootstrap();

//ClusterService.clusterize(bootstrap);
