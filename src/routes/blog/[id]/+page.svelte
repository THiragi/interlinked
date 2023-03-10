<script lang="ts">
  import BodyParser from '$lib/components/BodyParser.svelte';
	import ResponsiveImage from '$lib/components/ResponsiveImage.svelte';
	import type { PostData } from '$lib/types/post';
  import type { OgObject } from 'open-graph-scraper/lib/types';
	export let data: {content: PostData, ogDatas: OgObject[]};
  const { content, ogDatas } = data;
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
	<BodyParser html={body.replaceAll('/n', '<br/>')} {ogDatas}/>
</section>