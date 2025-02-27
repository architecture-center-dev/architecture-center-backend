import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateSolutionDto } from '../../application/dto/create-solution.dto';
import { UpdateSolutionDto } from '../../application/dto/update-solution.dto';
import { Solution } from '../entities/solution.entity';
import {ObjectID} from 'mongodb'
import { CanvasService } from './canvas.service';
import { CreateCanvasDto } from '../../application/dto/create-canvas.dto';

@Injectable()
export class SolutionsService {

  constructor(
    @InjectRepository(Solution)
    private userRepository: Repository<Solution>,
    private canvasService: CanvasService
  ) { }

  async create(createSolutionDto: CreateSolutionDto) {
    const solution : Solution = await this.userRepository.save(createSolutionDto);

    const canvas : CreateCanvasDto = {
      solution_id: solution.solution_id.toString(),
      dependencies: null,
      technology: null,
      patterns: null,
      problem: null,
      func_requirement: null,
      non_func_requirement: null,
      context: null,
      difficulties: null,
      advantages: null
    }

    await this.canvasService.create(canvas);

    return solution;
  }

  findAll(filter:String) {

    const query = (filter != null && filter != "") ?
    {
      where: {
        $or:[
          {tags: {$in: [filter]}},
          {name: {$in: [filter]}}
        ]
      }
    } : {}

    return this.userRepository.find(query);
  }

  findOne(where : object) {
    return this.userRepository.findOne(where);
  }

  update(id: number, updateSolutionDto: UpdateSolutionDto) {
    return `This action updates a #${id} solution`;
  }

  remove(id: number) {
    return `This action removes a #${id} solution`;
  }
  
  async createTag(solution_id: string, tag: string) {
    
      const solutionRepository = getRepository(Solution); // you can also get it via getConnection().getRepository() or getManager().getRepository()
      const solution = await solutionRepository.findOne(new ObjectID(solution_id));
      
      if(!solution.tags.includes(tag)){
        (solution.tags as any).push(tag);
      }

      const result =  await solutionRepository.save(solution);

      return result;
  }
  
  async createTeamMember(solution_id: string, team_member: string) {
      
      const solutionRepository = getRepository(Solution); // you can also get it via getConnection().getRepository() or getManager().getRepository()
      const solution = await solutionRepository.findOne(new ObjectID(solution_id));
      
      if(solution.team_members == undefined){
        (solution.team_members as any) = [team_member];
      }else if(!solution.team_members.includes(team_member)){
        (solution.team_members as any).push(team_member);
      }

      const result =  await solutionRepository.save(solution);

      return result;
  }
}
