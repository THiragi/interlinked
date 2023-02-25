<script lang="ts">
	export let src: string;
	export let alt: string;
	export let width: number = 768;
	export let height: number = 480;
</script>

<div class="image">
	<picture>
		<source srcSet={`${src}?w=736&dpr=2&fm=webp`} media="(min-width: 576px)" type="image/webp"/>
		<source srcSet={`${src}?w=543&dpr=2&fm=webp`} media="(min-width: 425px)" type="image/webp"/>
		<source srcSet={`${src}?w=392&dpr=2&fm=webp`} media="(min-width: 320px)" type="image/webp"/>
		<img {src} {alt} {width} {height}/>
	</picture>
</div>

<style lang="scss">
	@keyframes bggradient{
		0% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 0%;
		}
	}
	.image {
		margin: 0 0 3rem 0;
		position: relative;
		img {
			background:linear-gradient(90deg, rgb(var(--color-lightness1)),rgb(var(--color-lightness3)),rgb(var(--color-lightness1)));
			background-size: 500% 500%;
			animation-name: bggradient;
			animation-duration: 2s;
			animation-iteration-count: infinite;
			animation-timing-function: ease-out;
			height: auto;
			width: 100%;
			object-fit: cover;
		}
	}
</style>