import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { AgreementModule } from './modules/agreement/agreement.module';
import { ClientTypeModule } from './modules/client-type/client-type.module';

@Module({
  imports: [AgreementModule, ClientTypeModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
