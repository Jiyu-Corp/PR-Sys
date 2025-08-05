import { Injectable } from '@nestjs/common';
import { CreateClientTypeDto } from './dto/create-client-type.dto';
import { UpdateClientTypeDto } from './dto/update-client-type.dto';

@Injectable()
export class ClientTypeService {
  create(createClientTypeDto: CreateClientTypeDto) {
    return 'This action adds a new clientType';
  }

  findAll() {
    return `This action returns all clientType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientType`;
  }

  update(id: number, updateClientTypeDto: UpdateClientTypeDto) {
    return `This action updates a #${id} clientType`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientType`;
  }
}
