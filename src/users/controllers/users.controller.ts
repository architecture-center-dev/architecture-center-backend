import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/application/adapters/graphql/guards/jwt-auth.guard';
import { UserService } from '../services/user.service';

@UseGuards(JwtAuthGuard)
@Controller('/users')
export class UsersController {
  constructor(private userService: UserService) { }


  @Get()
  public getUsers() {
    return this.userService.findAll();
  }
}
