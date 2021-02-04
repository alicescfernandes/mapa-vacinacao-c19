var fs = require('fs');
var lastupdate = require('./ig/last-update.json');
var contentHtml = fs.readFileSync('./image.html', 'utf8');

const puppeteer = require('puppeteer');

let d = new Date();
d.setHours(0);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(0);

(async () => {
	if (d.getTime() > lastupdate.date) {
		lastupdate.date = d.getTime();
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.setContent(contentHtml);
		await page.setViewport({ width: 1080, height: 1080 });
		await page.waitForTimeout(1000);
		await page.screenshot({ path: `ig/image-${d.getTime()}.png` });
		await browser.close();
		fs.writeFile('./ig/last-update.json', JSON.stringify(lastupdate), () => {});
	}
})();
