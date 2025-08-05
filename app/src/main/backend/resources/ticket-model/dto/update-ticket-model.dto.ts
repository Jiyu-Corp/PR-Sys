import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketModelDto } from './create-ticket-model.dto';

export class UpdateTicketModelDto extends PartialType(CreateTicketModelDto) {
  id: number;
}
