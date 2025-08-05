import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PriceTableService } from './price-table.service';
import { CreatePriceTableDto } from './dto/create-price-table.dto';
import { UpdatePriceTableDto } from './dto/update-price-table.dto';

@Controller()
export class PriceTableController {
  constructor(private readonly priceTableService: PriceTableService) {}

  @MessagePattern('createPriceTable')
  create(@Payload() createPriceTableDto: CreatePriceTableDto) {
    return this.priceTableService.create(createPriceTableDto);
  }

  @MessagePattern('findAllPriceTable')
  findAll() {
    return this.priceTableService.findAll();
  }

  @MessagePattern('findOnePriceTable')
  findOne(@Payload() id: number) {
    return this.priceTableService.findOne(id);
  }

  @MessagePattern('updatePriceTable')
  update(@Payload() updatePriceTableDto: UpdatePriceTableDto) {
    return this.priceTableService.update(updatePriceTableDto.id, updatePriceTableDto);
  }

  @MessagePattern('removePriceTable')
  remove(@Payload() id: number) {
    return this.priceTableService.remove(id);
  }
}
