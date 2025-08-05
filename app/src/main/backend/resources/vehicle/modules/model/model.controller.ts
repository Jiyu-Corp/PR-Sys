import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ModelService } from './model.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Controller()
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @MessagePattern('createModel')
  create(@Payload() createModelDto: CreateModelDto) {
    return this.modelService.create(createModelDto);
  }

  @MessagePattern('findAllModel')
  findAll() {
    return this.modelService.findAll();
  }

  @MessagePattern('findOneModel')
  findOne(@Payload() id: number) {
    return this.modelService.findOne(id);
  }

  @MessagePattern('updateModel')
  update(@Payload() updateModelDto: UpdateModelDto) {
    return this.modelService.update(updateModelDto.id, updateModelDto);
  }

  @MessagePattern('removeModel')
  remove(@Payload() id: number) {
    return this.modelService.remove(id);
  }
}
