import { Test, TestingModule } from '@nestjs/testing';
import { SolutionsController } from './solutions.controller';
import { SolutionsService } from '../../../domain/services/solutions.service';
import { Solution } from '../../../domain/entities/solution.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CanvasService } from '../../../domain/services/canvas.service';
import { Canvas } from '../../../domain/entities/canvas.entity';

describe('SolutionsController', () => {
  let solutionsController: SolutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolutionsController],
      providers: [
        SolutionsService,
        CanvasService,
        {
          provide: getRepositoryToken(Solution),
          useValue: {}
        },
        {
          provide: getRepositoryToken(Canvas),
          useValue: {}
        }
      ],
    }).compile();

    solutionsController = module.get<SolutionsController>(SolutionsController);
  });

  it('should be defined', () => {
    expect(solutionsController).toBeDefined();
  });
});
