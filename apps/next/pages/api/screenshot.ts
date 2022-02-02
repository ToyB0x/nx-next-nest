import chromium from 'chrome-aws-lambda'

export default async function handler(req, res) {
  const { url } = req.query
  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
  })
  const page = await browser.newPage()
  await page.goto(url)
  const screenshot = await page.screenshot({
    encoding: 'base64',
  })

  await browser.close()

  res.status(200).text(screenshot)
}
