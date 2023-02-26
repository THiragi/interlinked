<script lang="ts">
  import { onMount } from 'svelte';
  export let href: string;
  
  const [id, _, code] = href.split('/');
  const embedSrc = `https://embed-media.vercel.app/tweet?id=${id}&code=${code}`;

  let iframe: HTMLIFrameElement;
  onMount(() => {
    iframe.style.width = iframe.contentWindow?.document.body.scrollWidth + 'px';
    iframe.style.height = iframe.contentWindow?.document.body.scrollHeight + 'px';
  })
</script>

<div>
  <iframe
    id="frame"
    src={embedSrc} 
    title={code} 
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    scrolling="no"
    loading="lazy"
  >
  </iframe>
</div>

<style lang="scss">
  div {
    text-align: center;
    iframe {
      width: 520px;
      border: none;
    }
  }
</style>