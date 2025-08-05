import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { BrandModule } from './modules/brand/brand.module';
import { ModelModule } from './modules/model/model.module';
import { VehicleTypeModule } from './modules/vehicle-type/vehicle-type.module';

@Module({
  imports: [BrandModule, ModelModule, VehicleTypeModule],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
