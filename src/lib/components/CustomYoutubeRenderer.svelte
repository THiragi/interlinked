<script lang="ts">
  export let id: string;
  const embedSrc = `https://www.youtube-nocookie.com/embed/${id}?start=7`;
</script>

<span>
  <iframe src={embedSrc} title={id} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy">
  </iframe>
</span>

<style lang="scss">
  span {
    position: relative;
    display: block;
    width: 100%;
    margin: 1.5rem 0;
    height: 300px;
    box-sizing: border-box;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
</style>