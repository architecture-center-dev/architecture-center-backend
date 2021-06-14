import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Canvas } from '../entities/canvas.entity';
import { CreateCanvasDto } from '../dto/create-canvas.dto';
import {ObjectID} from "mongodb"
import { CanvasRepository } from '../respositories/canvas.repository';

@Injectable()
export class CanvasService {

  constructor(
    @InjectRepository(Canvas)
    private canvasRepository: CanvasRepository,
  ) { }

  async createItemCanvas(canvas_id: String, value: String, item: String) {

      const canvas = await this.canvasRepository.findOne(new ObjectID(canvas_id));

      if(canvas[item as string] == undefined){
        (canvas[item as string] as any) = [value];
      }else if(!canvas[item as string].includes(value)){
        (canvas[item as string] as any).push(value);
      }

      const result =  await this.canvasRepository.save(canvas);

      return result;
  }
  
  create(canvas: CreateCanvasDto) : Promise<Canvas> {
    return this.canvasRepository.save({...canvas});
  }

  findOne(where : object) {
    return this.canvasRepository.findOne(where);
  }
}
