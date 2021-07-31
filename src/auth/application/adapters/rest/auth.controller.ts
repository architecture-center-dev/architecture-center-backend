import { Controller, Request, Post, UseGuards, Get, Body, Param, HttpException, HttpStatus, HttpCode, Redirect } from '@nestjs/common';
import { AuthService } from '../../../domain/services/auth.service';
import { LocalAuthGuard } from '../graphql/guards/local-auth.guard';
import { UserDto } from '../../dto/user.dto';
import { User } from 'src/users/domain/Entities/user.entity';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('oauth2/token')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req) {
    return this.authService.login({
      username: req.user.email,
      password: req.body.password
    });
  }

  @Post('auth/register')
  @HttpCode(HttpStatus.CREATED)
  async registerUser(@Body() userDto: UserDto) {

    const result: User | String = await this.authService.registerUser(userDto);

    if (typeof result == "string") {
      throw new HttpException(result, HttpStatus.NOT_ACCEPTABLE);
    }

    return result;

  }
}
