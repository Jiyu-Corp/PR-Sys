import { Module } from '@nestjs/common';
import { PriceTableService } from './price-table.service';
import { PriceTableController } from './price-table.controller';
import { PriceTableHourModule } from './price-table-hour/price-table-hour.module';

@Module({
  imports: [PriceTableHourModule],
  controllers: [PriceTableController],
  providers: [PriceTableService],
})
export class PriceTableModule {}
