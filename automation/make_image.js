var fs = require('fs');
var contentHtml = fs.readFileSync('./image.html', 'utf8');

const puppeteer = require('puppeteer');

let d = new Date();
(async () => {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.setContent(contentHtml);
	await page.setViewport({ width: 1080, height: 1080 });
	await page.waitForTimeout(1000);
	await page.screenshot({ path: `image2-${d.getDay().toPrecision(1)}_${d.getMonth().toPrecision(1) + 1}_${d.getFullYear()}.png` });
	await browser.close();
})();
