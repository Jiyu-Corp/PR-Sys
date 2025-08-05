import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TicketModelService } from './ticket-model.service';
import { CreateTicketModelDto } from './dto/create-ticket-model.dto';
import { UpdateTicketModelDto } from './dto/update-ticket-model.dto';

@Controller()
export class TicketModelController {
  constructor(private readonly ticketModelService: TicketModelService) {}

  @MessagePattern('createTicketModel')
  create(@Payload() createTicketModelDto: CreateTicketModelDto) {
    return this.ticketModelService.create(createTicketModelDto);
  }

  @MessagePattern('findAllTicketModel')
  findAll() {
    return this.ticketModelService.findAll();
  }

  @MessagePattern('findOneTicketModel')
  findOne(@Payload() id: number) {
    return this.ticketModelService.findOne(id);
  }

  @MessagePattern('updateTicketModel')
  update(@Payload() updateTicketModelDto: UpdateTicketModelDto) {
    return this.ticketModelService.update(updateTicketModelDto.id, updateTicketModelDto);
  }

  @MessagePattern('removeTicketModel')
  remove(@Payload() id: number) {
    return this.ticketModelService.remove(id);
  }
}
