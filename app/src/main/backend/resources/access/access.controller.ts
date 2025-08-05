import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccessService } from './access.service';
import { CreateAccessDto } from './dto/create-access.dto';
import { UpdateAccessDto } from './dto/update-access.dto';

@Controller()
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @MessagePattern('createAccess')
  create(@Payload() createAccessDto: CreateAccessDto) {
    return this.accessService.create(createAccessDto);
  }

  @MessagePattern('findAllAccess')
  findAll() {
    return this.accessService.findAll();
  }

  @MessagePattern('findOneAccess')
  findOne(@Payload() id: number) {
    return this.accessService.findOne(id);
  }

  @MessagePattern('updateAccess')
  update(@Payload() updateAccessDto: UpdateAccessDto) {
    return this.accessService.update(updateAccessDto.id, updateAccessDto);
  }

  @MessagePattern('removeAccess')
  remove(@Payload() id: number) {
    return this.accessService.remove(id);
  }
}
