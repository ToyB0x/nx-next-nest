import { Module } from '@nestjs/common'

import { AppController, ScreenshotController } from './app.controller'
import { AppService, ScreenshotAppService } from './app.service'

@Module({
  imports: [],
  controllers: [AppController, ScreenshotController],
  providers: [AppService, ScreenshotAppService],
})
export class AppModule {}
