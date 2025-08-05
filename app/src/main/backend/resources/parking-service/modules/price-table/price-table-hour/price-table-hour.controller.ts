import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PriceTableHourService } from './price-table-hour.service';
import { CreatePriceTableHourDto } from './dto/create-price-table-hour.dto';
import { UpdatePriceTableHourDto } from './dto/update-price-table-hour.dto';

@Controller()
export class PriceTableHourController {
  constructor(private readonly priceTableHourService: PriceTableHourService) {}

  @MessagePattern('createPriceTableHour')
  create(@Payload() createPriceTableHourDto: CreatePriceTableHourDto) {
    return this.priceTableHourService.create(createPriceTableHourDto);
  }

  @MessagePattern('findAllPriceTableHour')
  findAll() {
    return this.priceTableHourService.findAll();
  }

  @MessagePattern('findOnePriceTableHour')
  findOne(@Payload() id: number) {
    return this.priceTableHourService.findOne(id);
  }

  @MessagePattern('updatePriceTableHour')
  update(@Payload() updatePriceTableHourDto: UpdatePriceTableHourDto) {
    return this.priceTableHourService.update(updatePriceTableHourDto.id, updatePriceTableHourDto);
  }

  @MessagePattern('removePriceTableHour')
  remove(@Payload() id: number) {
    return this.priceTableHourService.remove(id);
  }
}
