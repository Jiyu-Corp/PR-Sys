import { Module } from '@nestjs/common'
import electronNestConfig from './electronNestConfig'

@Module({
  imports: [
    electronNestConfig,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
