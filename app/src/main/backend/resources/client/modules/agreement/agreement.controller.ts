import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AgreementService } from './agreement.service';
import { CreateAgreementDto } from './dto/create-agreement.dto';
import { UpdateAgreementDto } from './dto/update-agreement.dto';

@Controller()
export class AgreementController {
  constructor(private readonly agreementService: AgreementService) {}

  @MessagePattern('createAgreement')
  create(@Payload() createAgreementDto: CreateAgreementDto) {
    return this.agreementService.create(createAgreementDto);
  }

  @MessagePattern('findAllAgreement')
  findAll() {
    return this.agreementService.findAll();
  }

  @MessagePattern('findOneAgreement')
  findOne(@Payload() id: number) {
    return this.agreementService.findOne(id);
  }

  @MessagePattern('updateAgreement')
  update(@Payload() updateAgreementDto: UpdateAgreementDto) {
    return this.agreementService.update(updateAgreementDto.id, updateAgreementDto);
  }

  @MessagePattern('removeAgreement')
  remove(@Payload() id: number) {
    return this.agreementService.remove(id);
  }
}
