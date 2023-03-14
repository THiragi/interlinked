<script lang="ts">
  export let id: string;
  const embedSrc = `https://www.youtube-nocookie.com/embed/${id}?start=7`;
</script>

<div>
  <iframe src={embedSrc} title={id} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy">
  </iframe>
</div>

<style lang="scss">
  div {
    width: 100%;
    aspect-ratio: 16 / 9;
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
</style>