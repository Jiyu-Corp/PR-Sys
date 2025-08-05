import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingServiceDto } from './create-parking-service.dto';

export class UpdateParkingServiceDto extends PartialType(CreateParkingServiceDto) {
  id: number;
}
