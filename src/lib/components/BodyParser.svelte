

<script lang="ts">
	import { Html, isTag, isText } from 'html-svelte-parser';
	import type { Element, Text} from 'html-svelte-parser';
	import Tweet from './Tweet.svelte';
	import LinkCard from './LinkCard.svelte';
  import Youtube from './Youtube.svelte';
	import ResponsiveImage from './ResponsiveImage.svelte';
	import { scraper } from '$lib/config/scraper';
	import type { OgData } from '$lib/types/ogp';
	import type { AmazonItem } from '$lib/types/puppeteer';
	import AmazonLink from './AmazonLink.svelte';
	export let html: string;
	export let ogDatas: OgData[];
	export let amazonItems: AmazonItem[];

	const includesTweet = html.includes(scraper.twitter);

	const processNode = (node: Element | Text) => {
		if (isTag(node) && node.name === 'p') {
			const { firstChild } = node;
			if (!!firstChild && isTag(firstChild)) {
				
				if (firstChild.name === 'img') {
					return {
						component: ResponsiveImage,
						props: { src: firstChild.attribs.src, alt: firstChild.attribs?.alt ?? '' }
					};
				}
				if (firstChild.name === 'a') {
					if (firstChild.attribs?.href?.includes(scraper.youtube)) {
						return {
							component: Youtube,
							props: { id: firstChild.attribs.href.replace(scraper.youtube, '') }
						};
					}
					if (firstChild.attribs?.href?.includes(scraper.twitter)) {
						return {
							component: Tweet,
							props: { href: firstChild.attribs.href }
						};
					}
					if (firstChild.attribs?.href?.includes(scraper.amazon)) {
						const amazonItem = amazonItems.find((data) => firstChild.attribs?.href.includes(data.id))
						if (!!amazonItem) {
							const item = {...amazonItem, url: firstChild.attribs?.href}
							return {
								component: AmazonLink,
								props: {item: item}
							}
						}

					}
					if (!!firstChild.firstChild && isText(firstChild.firstChild) && firstChild.firstChild?.data === firstChild.attribs?.href) {
						const ogData = ogDatas.find((data) => data?.url === firstChild.attribs?.href)
						if (!!ogData) {
							return {
								component: LinkCard,
								props: { ogData: ogData }
							};
						}
					}
				}
			}
		}
	}
</script>

<svelte:head>
	{#if includesTweet}
		<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
	{/if}
</svelte:head>	

<div class="body">
	<Html
		{html}
		{processNode}
	/>
  
</div>


<style lang="scss">
	.body {
		margin: 3rem 0;
	}
</style>