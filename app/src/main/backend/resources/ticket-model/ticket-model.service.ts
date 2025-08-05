import { Injectable } from '@nestjs/common';
import { CreateTicketModelDto } from './dto/create-ticket-model.dto';
import { UpdateTicketModelDto } from './dto/update-ticket-model.dto';

@Injectable()
export class TicketModelService {
  create(createTicketModelDto: CreateTicketModelDto) {
    return 'This action adds a new ticketModel';
  }

  findAll() {
    return `This action returns all ticketModel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketModel`;
  }

  update(id: number, updateTicketModelDto: UpdateTicketModelDto) {
    return `This action updates a #${id} ticketModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketModel`;
  }
}
