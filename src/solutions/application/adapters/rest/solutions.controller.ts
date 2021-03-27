import { Controller, Get, Post, Body, Put, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SolutionsService } from '../../../domain/services/solutions.service';
import { CreateSolutionDto } from '../../../domain/dto/create-solution.dto';
import { UpdateSolutionDto } from '../../../domain/dto/update-solution.dto';
import { JwtAuthGuard } from '../../../../auth/guards/jwt-auth.guard';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Solution } from 'src/solutions/domain/entities/solution.entity';

@ApiTags("Solutions")
@Controller('solutions')
export class SolutionsController {
  constructor(private readonly solutionsService: SolutionsService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse(
    {
      type: CreateSolutionDto,
      description: "Solution was created successfull."
    }
  )
  @ApiUnauthorizedResponse()
  create(@Body() createSolutionDto: CreateSolutionDto) {
    return this.solutionsService.create(createSolutionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/:solution_id/tags')
  createTags(@Param('solution_id') solution_id: string, @Body() updateSolutionDto: UpdateSolutionDto) {

    return this.solutionsService.createTag(solution_id, updateSolutionDto.tags as string);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/:solution_id/team-members')
  createTeamMember(@Param('solution_id') solution_id: string, @Body() request: Object) {

    return this.solutionsService.createTeamMember(solution_id, (request as any).team_member);
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  @ApiOkResponse({ type: [Solution] })
  @ApiOperation({ description: "List all solutions", summary: "List all solutions" })
  findAll(@Query() query: Object) {

    return this.solutionsService.findAll((query as any).search);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solutionsService.findOne({ where: { _id: id } });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSolutionDto: UpdateSolutionDto) {
    return this.solutionsService.update(+id, updateSolutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solutionsService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/:solution_id/big-picture')
  uploadBigPicture(@Param('solution_id') solution_id: string, @Body() request: Object) {

    return this.solutionsService.createTeamMember(solution_id, (request as any).team_member);
  }
}
