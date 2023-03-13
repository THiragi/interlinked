<script lang="ts">
  import BodyParser from '$lib/components/BodyParser.svelte';
	import ResponsiveImage from '$lib/components/ResponsiveImage.svelte';
	import type { PostData } from '$lib/types/post';
	import type { OgData } from '$lib/types/ogp';
	import type { AmazonItem } from '$lib/types/puppeteer';
	export let data: {content: PostData, ogDatas: OgData[], amazonItems: AmazonItem[]};
  const { content, ogDatas, amazonItems } = data;
  const {title, image, body } = content;
</script>

<section>
	<h1>{title}</h1>
		<ResponsiveImage 
			src={image.url} 
			alt={title}
			width={image.width}
			height={image.height}
		/>
	<BodyParser html={body.replaceAll('/n', '<br/>')} {ogDatas} {amazonItems}/>
</section>