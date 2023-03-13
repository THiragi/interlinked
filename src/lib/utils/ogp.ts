import openGraphScraper from 'open-graph-scraper';

export function getUrls(body: string) {
	const regUrl = /(?<!\()https?:\/\/[-_.!~*\\'()a-zA-Z0-9;\\/?:\\@&=+\\$,%#]+/g;

	const urls = body.match(regUrl);

	return (
		[
			...new Set(
				urls?.filter(
					(url) => !url.includes('https://youtu.be/') && !url.includes('https://twitter.com/')
				)
			)
		] ?? []
	);
}

export function getDomainFromUrl(url: string) {
	const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im);
	return match ? match[1] : undefined;
}

export async function getOgpDatas(urls: string[]) {
	return await Promise.all(
		urls.map(async (url) => {
			const options = { url, onlyGetOpenGraphInfo: true };
			return openGraphScraper(options)
				.then((data) => {
					const { success, ogUrl, ogDescription, ogTitle, ogImage } = data.result;
					if (!success || !ogUrl) {
						return;
					}
					const image = Array.isArray(ogImage)
						? ogImage[0]
						: typeof ogImage === 'string'
						? undefined
						: ogImage;

					const domain = getDomainFromUrl(ogUrl);
					return {
						url: ogUrl ?? '',
						domain: domain ?? '',
						title: ogTitle ?? '',
						description: ogDescription ?? '',
						ogImageSrc: image?.url ?? ''
					};
				})
				.catch((error) => {
					console.error(error);
				});
		})
	);
}
