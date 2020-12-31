import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
import { Solution } from './entities/solution.entity';

@Injectable()
export class SolutionsService {

  constructor(
    @InjectRepository(Solution)
    private userRepository: Repository<Solution>,
  ) { }

  create(createSolutionDto: CreateSolutionDto) {
    return this.userRepository.save(createSolutionDto);
  }

  findAll(filter:String) {

    const query = filter != null ?
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

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateSolutionDto: UpdateSolutionDto) {
    return `This action updates a #${id} solution`;
  }

  remove(id: number) {
    return `This action removes a #${id} solution`;
  }
}
