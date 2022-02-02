import puppeteer from 'puppeteer'

export default async function handler(req, res) {
  const { url } = req.query
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  const screenshot = await page.screenshot({
    encoding: 'base64',
  })

  await browser.close()

  res.status(200).text(screenshot)
}
