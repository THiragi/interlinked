

<script lang="ts">
	import { Html, isTag, isText } from 'html-svelte-parser';
	import type { Element, Text} from 'html-svelte-parser';
	import CustomEmbedTweet from './CustomEmbedTweet.svelte';
	import CustomLinkCard from './CustomLinkCard.svelte';
  import CustomYoutubeRenderer from './CustomYoutubeRenderer.svelte';
	import ResponsiveImage from './ResponsiveImage.svelte';
	import type { OgData } from '$lib/types/ogp';
	export let html: string;
	export let ogDatas: OgData[];

	const includesTweet = html.includes('https://twitter.com/');

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
					if (firstChild.attribs?.href?.includes('https://youtu.be/')) {
						return {
							component: CustomYoutubeRenderer,
							props: { id: firstChild.attribs.href.replace('https://youtu.be/', '') }
						};
					}
					if (firstChild.attribs?.href?.includes('https://twitter.com/')) {
						return {
							component: CustomEmbedTweet,
							props: { href: firstChild.attribs.href }
						};
					}
					if (!!firstChild.firstChild && isText(firstChild.firstChild) && firstChild.firstChild?.data === firstChild.attribs?.href) {
						const ogData = ogDatas.find((data) => data?.url === firstChild.attribs?.href)
						if (!!ogData) {
							return {
								component: CustomLinkCard,
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