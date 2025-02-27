import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('/users')
export class UsersController {
  constructor(private userService: UserService) { }


  @Get()
  public getUsers() {
    return this.userService.findAll();
  }
}
