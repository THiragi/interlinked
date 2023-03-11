import type { ServerLoad } from '@sveltejs/kit';
import type { PostData } from '$lib/types/post';
import { getClient } from '$lib/utils/microcms';
import { getOgpDatas, getUrls } from '$lib/utils/ogp';

export const load: ServerLoad = async ({ params, fetch }) => {
	const client = getClient(fetch);
	const { id } = params;
	if (!id) return;
	const content = await client.get<PostData>({ endpoint: 'post', contentId: id });
	const urls = getUrls(content.body);

	const ogDatas = await getOgpDatas(urls);

	return {
		content,
		ogDatas
	};
};
