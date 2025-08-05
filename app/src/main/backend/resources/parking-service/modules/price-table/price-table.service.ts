import { Injectable } from '@nestjs/common';
import { CreatePriceTableDto } from './dto/create-price-table.dto';
import { UpdatePriceTableDto } from './dto/update-price-table.dto';

@Injectable()
export class PriceTableService {
  create(createPriceTableDto: CreatePriceTableDto) {
    return 'This action adds a new priceTable';
  }

  findAll() {
    return `This action returns all priceTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceTable`;
  }

  update(id: number, updatePriceTableDto: UpdatePriceTableDto) {
    return `This action updates a #${id} priceTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceTable`;
  }
}
