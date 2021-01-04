import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql.auth.guard';
import { CanvasService } from 'src/solutions/domain/services/canvas.service';
import { Canvas } from 'src/solutions/domain/entities/canvas.entity';
import { CreateCanvasDto } from 'src/solutions/domain/dto/create-canvas.dto';

@Resolver('canvas')
export class CanvasResolver {
  constructor(
    private canvasService: CanvasService
  ) { }

  //@UseGuards(GqlAuthGuard)
  @Query(returns => Canvas, {nullable : true})
  public async canvasBySolutionId(@Args({ name: 'solution_id' }) solution_id: string) {

    const canvas: Canvas = await this.canvasService.findOne({where:{solution_id: solution_id}} as object);
    
    return canvas;
  }

  //@UseGuards(GqlAuthGuard)
  @Mutation(returns => Canvas)
  public async createCanvas(
    @Args({ name: 'canvas', type: () => CreateCanvasDto}) canvas: CreateCanvasDto
  ): Promise<Canvas> {
    const canvasSaved: Canvas = await this.canvasService.create(canvas);
    
    return canvasSaved;
  }
  
  //@UseGuards(GqlAuthGuard)
  @Mutation(returns => Canvas)
  public async createItemCanvas(
    @Args({ name: 'canvas_id' }) canvas_id: string,
    @Args({ name: 'item' }) item: string,
    @Args({ name: 'value' }) value: string,
  ) {

    const result: Canvas = await this.canvasService.createItemCanvas(canvas_id, value, item);
    
    return result;
  }
}