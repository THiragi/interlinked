<script lang="ts">
  import type { OgObject } from "open-graph-scraper/lib/types";
  import { getDomainFromUrl } from '$lib/utils/ogp';
  export let ogData: OgObject | undefined;

  const ogImage = ogData?.ogImage;
  const image = Array.isArray(ogImage) ? ogImage[0] : typeof ogImage === 'string' ? undefined : ogImage;
  const domain = getDomainFromUrl(ogData?.ogUrl);
</script>

<a href={ogData?.ogUrl} target="_blanck">
  <picture>
    <img src={`${ogData?.ogUrl}${image?.url}`} alt={ogData?.ogTitle} />
  </picture>
  <div class="info">
    <div class="content">
      <h1>{ogData?.ogTitle}</h1>
      <div class="description">
        {ogData?.ogDescription}
      </div>
    </div>
    <div class="domain">
      <img src="https://www.google.com/s2/u/0/favicons?domain=${domain}" alt="${domain}"/>
      <div class="name">${domain}</div>
    </div>
  </div>
</a>

<style lang="scss">
  a {
    display: block;
    border: 1px solid rgb(var(--color-darkness3));
    // box-shadow: 0 0.3rem 1.2rem 0 rgba(var(--color-shadow), 10%);
    border-radius: 0.8rem;
    overflow: hidden;
    transition: 0.3s;
    &:hover {
      transform: scale(1.025);
    }
    img {
      aspect-ratio: 2.4/1;
      height: auto;
      width: 100%;
      object-fit: cover;
    }
    .info {
      padding: 1rem ;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .content {
        h1 {
          margin: 0 0 0.4rem 0;
          font-size: 1rem;
        }
        .description {
          margin: 0.4rem 0 0.8rem 0;
          font-size: 0.8rem;
          line-height: 1rem;
        }
      }
      .domain {
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        color: rgba(var(--color-darkness2), 0.8);
      }
    }
  }
</style>