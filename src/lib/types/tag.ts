import type { MicroCMSListContent } from 'microcms-js-sdk';
export type Tag = {
	name: string;
	description: string;
};

export type TagData = MicroCMSListContent & Tag;
