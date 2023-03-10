import openGraphScraper from 'open-graph-scraper';
import type { OgObject } from 'open-graph-scraper/lib/types';

export const getOgpDatas = async (urls: string[]): Promise<OgObject[]> => {
	const ogpDatas: OgObject[] = [];
	if (urls.length === 0) return ogpDatas;

	await Promise.all(
		urls.map(async (url) => {
			const options = { url, onlyGetOpenGraphInfo: true };
			return openGraphScraper(options)
				.then((data) => {
					if (!data.result.success) {
						return;
					}
					ogpDatas.push(data.result);
				})
				.catch((error) => {
					console.error(error);
				});
		})
	);

	return ogpDatas;
};

export const getUrls = (md: string): string[] => {
	const regUrl = /(?<!\()https?:\/\/[-_.!~*\\'()a-zA-Z0-9;\\/?:\\@&=+\\$,%#]+/g;
	const urls = md.match(regUrl);

	return (
		[
			...new Set(
				urls?.filter(
					(url) => !url.includes('https://youtu.be/') && !url.includes('https://twitter.com/')
				)
			)
		] ?? []
	);
};

export const getDomainFromUrl = (url: string | undefined): string | undefined => {
	if (!url) return undefined;
	const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im);
	const result = match && match[1].match(/^[^.]+\.(.+\..+)$/);
	return result ? result[1] : undefined;
};
