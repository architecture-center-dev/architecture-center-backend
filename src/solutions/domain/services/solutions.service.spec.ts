import { Test } from '@nestjs/testing';
import { Solution } from '../entities/solution.entity';
import { SolutionsService } from './solutions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CanvasService } from './canvas.service';
import { CreateSolutionDto } from '../../application/dto/create-solution.dto';
import { ObjectID } from 'mongodb';
import { Canvas } from '../entities/canvas.entity';

describe('Solution Service', () => {
  let solutionsService: SolutionsService;
  let findOne: () => {} = jest.fn();
  let find: () => {} = jest.fn();
  let createSolutionDto: CreateSolutionDto = {
    big_picture: "url_image",
    customer: "customer",
    description: "desccription",
    market: "market",
    name: "name",
    project: "project",
    tags: "tags",
    team_members: "teams",
    year_month: "10/2020"
  }

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SolutionsService,
        CanvasService,
        {
          provide: getRepositoryToken(Solution),
          useValue: {
            save: () => ({ ...createSolutionDto, solution_id: new ObjectID() }),
            findOne,
            find
          }
        },
        {
          provide: getRepositoryToken(Canvas),
          useValue: {
            save: () => jest.fn()
          }
        }
      ],
    })
      .compile();

    solutionsService = await module.get(SolutionsService);
  })

  it('create method should return Solution object', async () => {


    let solution: Solution = await solutionsService.create(createSolutionDto);

    expect(solution).toMatchObject(createSolutionDto);

  })

  it('findOne method should call findOne in the SolutionRepository', async () => {

    await solutionsService.findOne({});

    expect(findOne).toBeCalled();

  })
  
  it('findAll method should call find in the SolutionRepository', async () => {

    await solutionsService.findAll("");

    expect(find).toBeCalled();

  })
});