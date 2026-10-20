import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { chromium } from 'playwright'
import { projects } from '../src/data/projects.js'

const outputDirectory = fileURLToPath(new URL('../public/projects/', import.meta.url))
await mkdir(outputDirectory, { recursive: true })

const browser = await chromium.launch({ headless: true })
const failures = []

try {
  for (const project of projects) {
    if (!project.liveUrl) {
      failures.push(`${project.title}: add a liveUrl before capturing its screenshot.`)
      continue
    }

    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    })

    try {
      const response = await page.goto(project.liveUrl, {
        waitUntil: 'networkidle',
        timeout: 60_000,
      })
      if (response && !response.ok()) {
        throw new Error(`The site returned HTTP ${response.status()}.`)
      }

      await page.evaluate(async () => {
        await document.fonts.ready
        const step = Math.max(300, Math.floor(window.innerHeight * 0.8))
        for (let top = 0; top < document.documentElement.scrollHeight; top += step) {
          window.scrollTo(0, top)
          await new Promise((resolve) => window.setTimeout(resolve, 100))
        }
        window.scrollTo(0, 0)
      })
      await page.waitForTimeout(500)

      const client = await page.context().newCDPSession(page)
      const metrics = await client.send('Page.getLayoutMetrics')
      const content = metrics.cssContentSize ?? metrics.contentSize
      const { data } = await client.send('Page.captureScreenshot', {
        format: 'webp',
        quality: 86,
        fromSurface: true,
        captureBeyondViewport: true,
        clip: { x: 0, y: 0, width: Math.min(content.width, 1440), height: content.height, scale: 1 },
      })
      const outputPath = path.join(outputDirectory, `${project.slug}.webp`)
      await writeFile(outputPath, Buffer.from(data, 'base64'))
      await client.detach()
      console.log(`Captured ${project.title}: ${outputPath}`)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      failures.push(`${project.title} (${project.liveUrl}): ${message}`)
      console.error(`Failed to capture ${project.title}: ${message}`)
    } finally {
      await page.close()
    }
  }
} finally {
  await browser.close()
}

if (failures.length > 0) {
  console.error(`\nScreenshot capture failed for ${failures.length} project(s).`)
  process.exitCode = 1
}
