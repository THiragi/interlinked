

<script lang="ts">
	import { Html, isTag } from 'html-svelte-parser';
	import CustomEmbedTweet from './CustomEmbedTweet.svelte';
  import CustomYoutubeRenderer from './CustomYoutubeRenderer.svelte';
	import ResponsiveImage from './ResponsiveImage.svelte';
	export let html: string;

	const includesTweet = html.includes('https://twitter.com/');

</script>

<svelte:head>
	{#if includesTweet}
		<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
	{/if}
</svelte:head>	

<div class="body">
	<Html
		{html}
		processNode={(node) => {
			if (isTag(node) && node.name === 'img') {
				return {
					component: ResponsiveImage,
					props: { src: node.attribs.src, alt: node.attribs?.alt ?? '' }
				};
			}
      if (isTag(node) && node.name === 'a' && node.attribs?.href?.includes('https://youtu.be/')) {
        return {
          component: CustomYoutubeRenderer,
          props: { id: node.attribs.href.replace('https://youtu.be/', '') }
        };
      }
      if (isTag(node) && node.name === 'a' && node.attribs?.href?.includes('https://twitter.com/')) {
        return {
          component: CustomEmbedTweet,
          props: { href: node.attribs.href }
        };
      }
		}}
	/>
  
</div>


<style lang="scss">
	.body {
		margin: 3rem 0;
	}
</style>