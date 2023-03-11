import openGraphScraper from 'open-graph-scraper';
import type { OgData } from '$lib/types/ogp';

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

	return match ? match[1] : undefined;
};

export const getOgpDatas = async (urls: string[]): Promise<OgData[]> => {
	const ogpDatas: OgData[] = [];
	if (urls.length === 0) return ogpDatas;

	await Promise.all(
		urls.map(async (url) => {
			const options = { url, onlyGetOpenGraphInfo: true };
			return openGraphScraper(options)
				.then((data) => {
					if (!data.result.success) {
						return;
					}
					const { ogUrl, ogDescription, ogTitle, ogImage } = data.result;
					const image = Array.isArray(ogImage)
						? ogImage[0]
						: typeof ogImage === 'string'
						? undefined
						: ogImage;

					const domain = getDomainFromUrl(ogUrl);
					const ogData = {
						url: ogUrl ?? '',
						domain: domain ?? '',
						title: ogTitle ?? '',
						description: ogDescription ?? '',
						ogImageSrc: image?.url ?? ''
					};
					ogpDatas.push(ogData);
				})
				.catch((error) => {
					console.error(error);
				});
		})
	);

	return ogpDatas;
};
