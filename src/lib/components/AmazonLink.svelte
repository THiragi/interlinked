<script lang="ts">
  import type { AmazonItem } from "$lib/types/puppeteer";
  export let item: AmazonItem;
  const {url, title, price, id } = item;

  const imageUrl = `https://images-fe.ssl-images-amazon.com/images/P/${id}.09.LZZZZZZZ`;
</script>

<a href={url} target="_blanck">
  <div class="ogImage">
    <img src={imageUrl} alt={title} />
  </div>
  <div class="info">
    <h1>{title}</h1>
    <div class="price">
      <span>
        {price}
      </span>
      <span>円</span>
    </div>
    
  </div>
</a>

<style lang="scss">
  a {
    margin: 2.4rem 0;
    display: flex;
    border: 1px solid rgb(var(--color-lightness3));
    border-radius: 0.5rem;
    overflow: hidden;
    &:hover {
      background-color: rgba(var(--color-lightness2), 0.4);
    }
    .ogImage {
      height: 120px;
      img {
        height: 120px;
        width: 120px;
        object-fit: cover;
      }
    }
    .info {
      padding: 0.8rem 1.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: calc(100% - 130px);
      h1 {
        user-select: none;
        word-break: break-word;
        margin: 0;
        font-size: 1.2rem;
        
      }
      .description {
        margin:0 ;
        color: rgba(var(--color-darkness3), 0.8);
        font-size: 0.8rem;
        line-height: 1rem;
        width: 98%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>