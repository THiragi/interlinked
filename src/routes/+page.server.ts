import type { ServerLoad } from '@sveltejs/kit';
import type { PostData } from '$lib/types/post';
import { getClient } from '$lib/utils/microcms';

export const load: ServerLoad = async ({ fetch }) => {
	const client = getClient(fetch);

	return await client.getList<PostData>({
		endpoint: 'post'
	});
};
