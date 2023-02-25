<script lang="ts">
  import BodyParser from '$lib/components/BodyParser.svelte';
	import ResponsiveImage from '$lib/components/ResponsiveImage.svelte';
	import type { PostData } from '$lib/types/post';
	export let data: PostData;
  const {title, image, body } = data;

  // let script: HTMLScriptElement;

  // onMount(() => {
  //   script = document.createElement('script');
  //   script.src = "https://platform.twitter.com/widgets.js";
  //   document.body.appendChild(script);
  // })
  // onDestroy(() => {
  //   document.body.removeChild(script);
  // })
</script>

<section>
	<h1>{title}</h1>
		<ResponsiveImage 
			src={image.url} 
			alt={title}
			width={image.width}
			height={image.height}
		/>
	<BodyParser html={body.replaceAll('/n', '<br/>')} />
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</section>