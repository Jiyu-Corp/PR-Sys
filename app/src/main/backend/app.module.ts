import { Module } from '@nestjs/common'

import { ConfigModule } from './config/config.module'
import { AccessModule } from './resources/access/access.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule,
    AccessModule,
    AuthModule
  ]
})
export class AppModule { }
