import { Controller, Get, Post, Body, Put, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SolutionsService } from './solutions.service';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('solutions')
export class SolutionsController {
  constructor(private readonly solutionsService: SolutionsService) {}

  //@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSolutionDto: CreateSolutionDto) {
    return this.solutionsService.create(createSolutionDto);
  }
  
  //@UseGuards(JwtAuthGuard)
  @Post('/:solution_id/tags')
  createTags(@Param('solution_id') solution_id: string, @Body() updateSolutionDto: UpdateSolutionDto) {

    return this.solutionsService.createTag(solution_id,updateSolutionDto.tags as string);
  }
  
  //@UseGuards(JwtAuthGuard)
  @Post('/:solution_id/team-members')
  createTeamMember(@Param('solution_id') solution_id: string, @Body() request: Object) {

    return this.solutionsService.createTeamMember(solution_id, (request as any).team_member);
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: Object) {

    return this.solutionsService.findAll((query as any).search);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solutionsService.findOne({where:{_id: id}});
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSolutionDto: UpdateSolutionDto) {
    return this.solutionsService.update(+id, updateSolutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solutionsService.remove(+id);
  }
}
