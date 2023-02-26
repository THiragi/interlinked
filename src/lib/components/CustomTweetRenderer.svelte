<script lang="ts">
  export let href: string;
  console.log(href);
  const [id, _, code] = href.split('/');
  const embedSrc = `https://embed-media.vercel.app/tweet?id=${id}&code=${code}`;
</script>

<span>
  <iframe src={embedSrc} title={code} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy">
  </iframe>
</span>

<style lang="scss">
  span {
    display: block;
    width: 100%;
    height: 300px;
    margin: 1.5rem auto;
    box-sizing: border-box;
    iframe {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
</style>