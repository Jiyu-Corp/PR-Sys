import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ParkingServiceService } from './parking-service.service';
import { CreateParkingServiceDto } from './dto/create-parking-service.dto';
import { UpdateParkingServiceDto } from './dto/update-parking-service.dto';

@Controller()
export class ParkingServiceController {
  constructor(private readonly parkingServiceService: ParkingServiceService) {}

  @MessagePattern('createParkingService')
  create(@Payload() createParkingServiceDto: CreateParkingServiceDto) {
    return this.parkingServiceService.create(createParkingServiceDto);
  }

  @MessagePattern('findAllParkingService')
  findAll() {
    return this.parkingServiceService.findAll();
  }

  @MessagePattern('findOneParkingService')
  findOne(@Payload() id: number) {
    return this.parkingServiceService.findOne(id);
  }

  @MessagePattern('updateParkingService')
  update(@Payload() updateParkingServiceDto: UpdateParkingServiceDto) {
    return this.parkingServiceService.update(updateParkingServiceDto.id, updateParkingServiceDto);
  }

  @MessagePattern('removeParkingService')
  remove(@Payload() id: number) {
    return this.parkingServiceService.remove(id);
  }
}
