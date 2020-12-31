import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql.auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { SolutionsService } from '../solutions.service';
import { Solution } from '../entities/solution.entity';

@Resolver('Solutions')
export class SolutionResolver {
  constructor(private solutionService: SolutionsService) { }

  //@UseGuards(GqlAuthGuard)
  @Query(returns => [Solution])
  public async solution(@Args({ name: 'search',nullable: true }) search: string) {
    
    const solutions: Array<Solution> = await this.solutionService.findAll(search);

    return solutions;
  }
}