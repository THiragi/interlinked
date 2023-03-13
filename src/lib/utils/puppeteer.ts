import puppeteer from 'puppeteer';
import { scraper } from '$lib/config/scraper';

export async function getAmazonItems(urls: string[]) {
	const filteredUrls = urls.filter((url) => url.includes(scraper.amazon));
	const browser = await puppeteer.launch();

	const promise = filteredUrls.map(async (url) => {
		const page = await browser.newPage();
		const id = url.replace(scraper.amazon, '').split('?')[0];
		const res = await page.goto(url, { waitUntil: 'domcontentloaded' });
		if (res?.status() !== 200) {
			return {
				result: 'error',
				id,
				url,
				title: '',
				price: '',
				timestamp: 0
			};
		}
		const title = await page.title();
		const price = await page.evaluate(() => {
			return document.getElementsByClassName('a-price-whole')[0].textContent;
		});
		await page.close();
		return {
			result: 'success',
			id,
			url,
			title,
			price: price ?? '',
			timestamp: new Date().toLocaleString('sv-SE')
		};
	});
	const result = await Promise.all(promise);
	browser.close();
	return result;
}
