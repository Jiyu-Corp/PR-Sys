import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientTypeService } from './client-type.service';
import { CreateClientTypeDto } from './dto/create-client-type.dto';
import { UpdateClientTypeDto } from './dto/update-client-type.dto';

@Controller()
export class ClientTypeController {
  constructor(private readonly clientTypeService: ClientTypeService) {}

  @MessagePattern('createClientType')
  create(@Payload() createClientTypeDto: CreateClientTypeDto) {
    return this.clientTypeService.create(createClientTypeDto);
  }

  @MessagePattern('findAllClientType')
  findAll() {
    return this.clientTypeService.findAll();
  }

  @MessagePattern('findOneClientType')
  findOne(@Payload() id: number) {
    return this.clientTypeService.findOne(id);
  }

  @MessagePattern('updateClientType')
  update(@Payload() updateClientTypeDto: UpdateClientTypeDto) {
    return this.clientTypeService.update(updateClientTypeDto.id, updateClientTypeDto);
  }

  @MessagePattern('removeClientType')
  remove(@Payload() id: number) {
    return this.clientTypeService.remove(id);
  }
}
