<script lang="ts">
  export let href: string;
  console.log(href);
  const [id, _, code] = href.split('/');
  const embedSrc = `https://embed-media.vercel.app/tweet?id=${id}&code=${code}`;
</script>

<div>
  <iframe src={embedSrc} title={code} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy">
  </iframe>
</div>

<style lang="scss">
  div {
    text-align: center;
    iframe {
      width: 520px;
      height: 740px;
      border: none;
    }
  }
</style>