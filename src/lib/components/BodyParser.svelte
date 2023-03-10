

<script lang="ts">
	import type { OgObject } from 'open-graph-scraper/lib/types';
	import { Html, isTag, isText } from 'html-svelte-parser';
	import type { Element, Text} from 'html-svelte-parser';
	import CustomEmbedTweet from './CustomEmbedTweet.svelte';
	import CustomLinkCard from './CustomLinkCard.svelte';
  import CustomYoutubeRenderer from './CustomYoutubeRenderer.svelte';
	import ResponsiveImage from './ResponsiveImage.svelte';
	export let html: string;
	export let ogDatas: OgObject[];

	const includesTweet = html.includes('https://twitter.com/');

	const processNode = (node: Element | Text) => {
		if (isTag(node)) {
			if (node.name === 'img') {
				return {
					component: ResponsiveImage,
					props: { src: node.attribs.src, alt: node.attribs?.alt ?? '' }
				};
			}
			if (node.name === 'a') {
				if (node.attribs?.href?.includes('https://youtu.be/')) {
					return {
						component: CustomYoutubeRenderer,
						props: { id: node.attribs.href.replace('https://youtu.be/', '') }
					};
				}
				if (node.attribs?.href?.includes('https://twitter.com/')) {
					return {
						component: CustomEmbedTweet,
						props: { href: node.attribs.href }
					};
				}
				if (!!node.firstChild && isText(node.firstChild) && node.firstChild.data === node.attribs?.href) {
					const ogData = ogDatas.find((data) => data?.ogUrl === node.attribs?.href)
					console.log(ogData)
					return {
						component: CustomLinkCard,
						props: { ogData: ogData }
					};
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