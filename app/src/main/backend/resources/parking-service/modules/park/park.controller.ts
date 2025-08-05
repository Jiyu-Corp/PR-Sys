import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ParkService } from './park.service';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';

@Controller()
export class ParkController {
  constructor(private readonly parkService: ParkService) {}

  @MessagePattern('createPark')
  create(@Payload() createParkDto: CreateParkDto) {
    return this.parkService.create(createParkDto);
  }

  @MessagePattern('findAllPark')
  findAll() {
    return this.parkService.findAll();
  }

  @MessagePattern('findOnePark')
  findOne(@Payload() id: number) {
    return this.parkService.findOne(id);
  }

  @MessagePattern('updatePark')
  update(@Payload() updateParkDto: UpdateParkDto) {
    return this.parkService.update(updateParkDto.id, updateParkDto);
  }

  @MessagePattern('removePark')
  remove(@Payload() id: number) {
    return this.parkService.remove(id);
  }
}
