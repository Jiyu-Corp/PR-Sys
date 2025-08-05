import { Module } from '@nestjs/common';
import { ParkingServiceService } from './parking-service.service';
import { ParkingServiceController } from './parking-service.controller';
import { ParkModule } from './modules/park/park.module';
import { PriceTableModule } from './modules/price-table/price-table.module';

@Module({
  imports: [ParkModule, PriceTableModule],
  controllers: [ParkingServiceController],
  providers: [ParkingServiceService],
})
export class ParkingServiceModule {}
