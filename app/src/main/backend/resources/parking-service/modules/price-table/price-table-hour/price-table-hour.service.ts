import { Injectable } from '@nestjs/common';
import { CreatePriceTableHourDto } from './dto/create-price-table-hour.dto';
import { UpdatePriceTableHourDto } from './dto/update-price-table-hour.dto';

@Injectable()
export class PriceTableHourService {
  create(createPriceTableHourDto: CreatePriceTableHourDto) {
    return 'This action adds a new priceTableHour';
  }

  findAll() {
    return `This action returns all priceTableHour`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceTableHour`;
  }

  update(id: number, updatePriceTableHourDto: UpdatePriceTableHourDto) {
    return `This action updates a #${id} priceTableHour`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceTableHour`;
  }
}
