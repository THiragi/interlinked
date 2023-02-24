import type { MicroCMSListContent, MicroCMSListResponse, MicroCMSImage } from 'microcms-js-sdk';

import type { TagData } from '$lib/types/tag';

export type Post = {
	title: string;
	preface: string;
	body: string;
	tags: TagData[];
	image: MicroCMSImage;
};

export type PostData = MicroCMSListContent & Post;

export type PostsData = MicroCMSListResponse<Post>;
