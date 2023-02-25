import type { ServerLoad } from '@sveltejs/kit';
import type { PostData } from '$lib/types/post';
import { getClient } from '$lib/utils/microcms';

export const load: ServerLoad = async ({ params, fetch }) => {
	const client = getClient(fetch);
	const { id } = params;
	if (!id) return;
	return await client.get<PostData>({ endpoint: 'post', contentId: id });
};
