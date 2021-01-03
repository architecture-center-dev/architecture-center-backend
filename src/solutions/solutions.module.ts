import { Module } from '@nestjs/common';
import { SolutionsService } from './domain/services/solutions.service';
import { SolutionsController } from './application/adapters/rest/solutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solution } from './domain/entities/solution.entity';
import { SolutionResolver } from './application/adapters/grapghql/resolvers/solution.resolver';
import { AttachmentService } from './domain/services/attachment.service';
import { Attachment } from './domain/entities/attachment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Solution, Attachment]),
  ],
  controllers: [SolutionsController],
  providers: [SolutionsService, SolutionResolver, AttachmentService]
})
export class SolutionsModule {}
