import { Controller, Get, Query } from '@nestjs/common'

import { AppService, ScreenshotAppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }
}

@Controller('screenshot')
export class ScreenshotController {
  constructor(private readonly appService: ScreenshotAppService) {}

  @Get()
  getData(@Query() query) {
    const { url } = query
    return this.appService.getData(url)
  }
}
