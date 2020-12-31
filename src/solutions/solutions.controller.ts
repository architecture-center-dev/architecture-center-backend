import { Controller, Get, Post, Body, Put, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SolutionsService } from './solutions.service';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('solutions')
export class SolutionsController {
  constructor(private readonly solutionsService: SolutionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSolutionDto: CreateSolutionDto) {
    return this.solutionsService.create(createSolutionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: Object) {

    return this.solutionsService.findAll((query as any).search);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solutionsService.findOne(+id);
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
