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
    text-align: center;
    box-sizing: border-box;
    iframe {
      width: 560px;
      height: 315px;
      border: none;
    }
  }
</style>