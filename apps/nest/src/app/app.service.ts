import { Injectable } from '@nestjs/common'
const puppeteer = require('puppeteer')

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to nest!' }
  }
}

@Injectable()
export class ScreenshotAppService {
  async getData(url: string): Promise<string> {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const screenshot = await page.screenshot({
      encoding: 'base64',
    })

    await browser.close()

    return screenshot
  }
}
