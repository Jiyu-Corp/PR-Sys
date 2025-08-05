import { Injectable } from '@nestjs/common';
import { CreateParkingServiceDto } from './dto/create-parking-service.dto';
import { UpdateParkingServiceDto } from './dto/update-parking-service.dto';

@Injectable()
export class ParkingServiceService {
  create(createParkingServiceDto: CreateParkingServiceDto) {
    return 'This action adds a new parkingService';
  }

  findAll() {
    return `This action returns all parkingService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingService`;
  }

  update(id: number, updateParkingServiceDto: UpdateParkingServiceDto) {
    return `This action updates a #${id} parkingService`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingService`;
  }
}
