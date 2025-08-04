import { Module } from '@nestjs/common'

// Config modules
import electronNest from './configModules/electronNest'
import typeORM from './configModules/typeORM'
import envConfig from './configModules/envConfig'

@Module({
  imports: [
    electronNest,
    envConfig,
    typeORM
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
