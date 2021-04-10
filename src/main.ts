import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ClusterService from "./cluster.service";
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
let appInsights = require("applicationinsights");



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());

  appInsights.setup(process.env.INSTRUMENTATION_KEY)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(true)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
    .start();

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
