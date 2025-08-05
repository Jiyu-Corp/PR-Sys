import { Module } from '@nestjs/common'
import { DatabaseConfigModule } from './database-config.module';
import { ElectronNestModule } from './electron-nest.module';
import { EnvConfigModule } from './env-config.module';

@Module({
  imports: [
    EnvConfigModule,
    ElectronNestModule,
    DatabaseConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class ConfigModule { }
