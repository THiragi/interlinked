<script lang="ts">
	import { page } from '$app/stores';
	import { site } from '$lib/config/site';
	import './styles.scss';
	const { name } = site;
	$: pathname = $page.url.pathname
</script>

<svelte:head>
	<meta property="og:url" content={`${site.url}${pathname}`} />
	<link rel="canonical" href={`${site.url}${pathname}`} />
	<meta property="og:site_name" content={site.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content={site.themeColor} />
</svelte:head>

<div id="app">
  <header>
    <div class="inner">
      <a href={'/'}>
        {name}
      </a>
    </div>
  </header>

  <main>
    <slot />
  </main>
  <footer>
    {`Designed and built by ${site.owner}`}
  </footer>
</div>

<style lang="scss">
	#app {
		min-height: 100vh;
		position: relative;
		box-sizing: border-box;
    header {
      // position: fixed;
      // z-index: 2;
      margin:0;	
      .inner {
        max-width: calc(var(--max-width) * 1px);
        margin: 0 auto;
        height: 6rem;
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0 var(--side-space);
        box-sizing: border-box;
        line-height: 6rem;
        font-size: 1.2rem;
        font-weight: 800;
        // font-family: var(--font-mono);
        letter-spacing: 0.2rem;	
        a {
          color: rgb(var(--color-red));
          text-decoration: none;
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
    main {
      max-width: calc(var(--max-width) * 1px);
      margin: 0 auto;
      padding: 0 var(--side-space);
      box-sizing: border-box;
    }
    footer {
      max-width: calc(var(--max-width) * 1px);
      margin: 0 auto;
      width: 100%;
      bottom: 0;
      padding: 3rem 0 6rem 0;
      text-align: center;
      font-size: 0.8rem;
      font-family: var(--font-mono);
    }
	}
</style>