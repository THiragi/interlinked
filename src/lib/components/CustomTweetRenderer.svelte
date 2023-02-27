<script lang="ts">
  import { onMount } from 'svelte';
  export let href: string;
  
  const [id, _, code] = href.split('/');
  const embedSrc = `https://embed-media.vercel.app/tweet?id=${id}&code=${code}`;

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