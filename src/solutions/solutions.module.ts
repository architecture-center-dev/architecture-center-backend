import { Module } from '@nestjs/common';
import { SolutionsService } from './domain/services/solutions.service';
import { SolutionsController } from './application/adapters/rest/solutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solution } from './domain/entities/solution.entity';
import { SolutionResolver } from './application/adapters/grapghql/resolvers/solution.resolver';
import { CanvasResolver } from './application/adapters/grapghql/resolvers/canvas.resolver';
import { AttachmentService } from './domain/services/attachment.service';
import { Attachment } from './domain/entities/attachment.entity';
import { CanvasService } from './domain/services/canvas.service';
import { Canvas } from './domain/entities/canvas.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Solution, Attachment, Canvas]),
  ],
  controllers: [SolutionsController],
  providers: [SolutionsService, SolutionResolver, AttachmentService, CanvasService, CanvasResolver]
})
export class SolutionsModule {}
