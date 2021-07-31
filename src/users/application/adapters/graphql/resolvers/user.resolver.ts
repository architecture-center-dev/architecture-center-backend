import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from '../../../../domain/Entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/application/adapters/graphql/decorators/current-user.decorator';
import { UserService } from '../../../../domain/services/user.service';
import { GqlAuthGuard } from 'src/auth/application/adapters/graphql/guards/gql.auth.guard';

@Resolver('Users')
export class UserResolver {
  constructor(private userService: UserService) { }

  @UseGuards(GqlAuthGuard)
  @Query(returns => [User])
  public async users(@CurrentUser() user) {
   
    const users: Array<User> = await this.userService.findAll();

    return users;
  }
}
