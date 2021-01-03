import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Canvas } from '../entities/canvas.entity';
import { CreateCanvasDto } from '../dto/create-canvas.dto';

@Injectable()
export class CanvasService {

  constructor(
    @InjectRepository(Canvas)
    private canvasRepository: Repository<Canvas>,
  ) { }

  createItemCanvas(createCanvasDto: CreateCanvasDto) {
    return this.canvasRepository.save(createCanvasDto);
  }
  
  create(canvas: CreateCanvasDto) : Promise<Canvas> {
    return this.canvasRepository.save({...canvas});
  }

  findOne(where : object) {
    return this.canvasRepository.findOne(where);
  }
}
