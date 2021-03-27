import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ClusterService from "./cluster.service";
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());

  const config = new DocumentBuilder()
    .setTitle('Architecture Center')
    .setDescription('The best open source architecture center')
    .setVersion('1.0')
    .addServer("/api")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.setGlobalPrefix('api');

  await app.listen(80);
}

bootstrap();

//ClusterService.clusterize(bootstrap);
