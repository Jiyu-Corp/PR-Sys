import { PartialType } from '@nestjs/mapped-types';
import { CreatePriceTableHourDto } from './create-price-table-hour.dto';

export class UpdatePriceTableHourDto extends PartialType(CreatePriceTableHourDto) {
  id: number;
}
