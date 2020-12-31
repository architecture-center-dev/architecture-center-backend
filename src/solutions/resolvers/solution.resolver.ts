import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql.auth.guard';
import { SolutionsService } from '../solutions.service';
import { Solution } from '../entities/solution.entity';
import {ObjectId} from "mongodb"

@Resolver('Solutions')
export class SolutionResolver {
  constructor(private solutionService: SolutionsService) { }

  //@UseGuards(GqlAuthGuard)
  @Query(returns => [Solution])
  public async solution(@Args({ name: 'search',nullable: true }) search: string) {
    
    const solutions: Array<Solution> = await this.solutionService.findAll(search);
    
    return solutions;
  }
  
  //@UseGuards(GqlAuthGuard)
  @Query(returns => Solution, {nullable : true})
  public async solutionById(@Args({ name: 'solution_id' }) solution_id: string) {

    const solution: Solution = await this.solutionService.findOne({where:{_id: new ObjectId(solution_id)}} as object);
    console.log(solution);
    return solution;
  }

  @Mutation(returns => Solution)
  public async createTagSolution(
    @Args({ name: 'solution_id' }) solution_id: string,
    @Args({ name: 'tag' }) tag: string,
  ) {

    const result: Solution = await this.solutionService.createTag(solution_id, tag);
    
    return result;
  }
}