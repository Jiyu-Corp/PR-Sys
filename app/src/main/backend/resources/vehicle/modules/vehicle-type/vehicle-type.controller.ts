import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VehicleTypeService } from './vehicle-type.service';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';

@Controller()
export class VehicleTypeController {
  constructor(private readonly vehicleTypeService: VehicleTypeService) {}

  @MessagePattern('createVehicleType')
  create(@Payload() createVehicleTypeDto: CreateVehicleTypeDto) {
    return this.vehicleTypeService.create(createVehicleTypeDto);
  }

  @MessagePattern('findAllVehicleType')
  findAll() {
    return this.vehicleTypeService.findAll();
  }

  @MessagePattern('findOneVehicleType')
  findOne(@Payload() id: number) {
    return this.vehicleTypeService.findOne(id);
  }

  @MessagePattern('updateVehicleType')
  update(@Payload() updateVehicleTypeDto: UpdateVehicleTypeDto) {
    return this.vehicleTypeService.update(updateVehicleTypeDto.id, updateVehicleTypeDto);
  }

  @MessagePattern('removeVehicleType')
  remove(@Payload() id: number) {
    return this.vehicleTypeService.remove(id);
  }
}
