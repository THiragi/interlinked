import type { ServerLoad } from '@sveltejs/kit';
import type { PostData } from '$lib/types/post';
import { getClient } from '$lib/utils/microcms';
import { getOgpDatas, getUrls } from '$lib/utils/ogp';
import { scraper } from '$lib/config/scraper';
import { getAmazonItems } from '$lib/utils/puppeteer';

export const load: ServerLoad = async ({ params, fetch }) => {
	const client = getClient(fetch);
	const { id } = params;
	if (!id) return;
	const content = await client.get<PostData>({ endpoint: 'post', contentId: id });
	const urls = getUrls(content.body);
	const amazonUrls = urls.filter((url) => url.includes(scraper.amazon));
	const otherUrls = urls.filter((url) => !url.includes(scraper.amazon));
	const ogDatas = await getOgpDatas(otherUrls);

	const amazonItems = await getAmazonItems(amazonUrls);

	return {
		content,
		ogDatas,
		amazonItems
	};
};
