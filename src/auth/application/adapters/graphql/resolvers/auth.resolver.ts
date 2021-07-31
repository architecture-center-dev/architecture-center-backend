import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from 'src/auth/domain/services/auth.service';
import { OauthTOken } from 'src/users/Entities/oauth-token.type';



@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) { }

  @Mutation(returns => OauthTOken, {nullable:true})
  public async login(
    @Args({ name: 'username' }) username: string,
    @Args({ name: 'password' }) password: string
  ) {

    const user: any = {username, password}

    const authResult = await this.authService.login(user);

    const oauth = new OauthTOken();
    oauth.accessToken = authResult.access_token;

    return oauth;
  }
}
