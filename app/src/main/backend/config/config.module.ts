import { Module } from '@nestjs/common'
import { DatabaseConfigModule } from './database-config.module';
import { ElectronNestModule } from './electron-nest.module';
import { EnvConfigModule } from './env-config.module';
import { SMTPConfigModule } from './smtp-config.module';
import { JwtConfigModule } from './jwt-config.module';

@Module({
  imports: [
    EnvConfigModule,
    ElectronNestModule,
    DatabaseConfigModule,
    SMTPConfigModule,
    JwtConfigModule
  ]
})
export class ConfigModule { }
