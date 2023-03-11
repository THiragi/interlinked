<script lang="ts">
  import BodyParser from '$lib/components/BodyParser.svelte';
	import ResponsiveImage from '$lib/components/ResponsiveImage.svelte';
	import type { PostData } from '$lib/types/post';
	import type { OgData } from '$lib/types/ogp';
	export let data: {content: PostData, ogDatas: OgData[]};
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