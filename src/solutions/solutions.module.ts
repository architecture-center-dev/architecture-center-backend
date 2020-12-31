import { Module } from '@nestjs/common';
import { SolutionsService } from './solutions.service';
import { SolutionsController } from './solutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solution } from './entities/solution.entity';
import { SolutionResolver } from './resolvers/solution.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Solution]),
  ],
  controllers: [SolutionsController],
  providers: [SolutionsService, SolutionResolver]
})
export class SolutionsModule {}
