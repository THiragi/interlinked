<script lang="ts">
  import FormatDate from "./FormatDate.svelte";
  import type { AmazonItem } from "$lib/types/puppeteer";
  export let item: AmazonItem;
  const {url, title, price, id, timestamp } = item;

  const length = 95;
  const titleLength = title.length <= length;
  const formatTitle = titleLength ? title : `${title.slice(0, length)}...`;


  const imageUrl = `https://images-fe.ssl-images-amazon.com/images/P/${id}.09.LZZZZZZZ`;
</script>

<a href={url} target="_blank" rel="noopener noreferrer nofollow">
  <div class="ogImage">
    <img src={imageUrl} alt={title} />
  </div>
  <div class="info">
    <h1>{formatTitle}</h1>
    <div class="detail">
      <div class="price">
        <span class="amount">
          {price}
        </span>
        <span class="symbol">円</span>
        <span class="timestamp">
          <FormatDate dateString={timestamp} dateFormat={`(yyyy年LL月dd日 hh:mm時点)`}/>
        </span>
      </div>
      <div class="label">
        Amazon.co.jpで購入する
      </div>
    </div>
  </div>
</a>

<style lang="scss">
  a {
    margin: 2.4rem 0;
    border: 1px solid rgb(var(--color-lightness3));
    border-radius: 0.5rem;
    &:hover {
      background-color: rgba(var(--color-lightness2), 0.4);
    }
    padding: 1.2rem;
    display: block;
    @include mq(sm) {
      display: flex;
    }
    justify-content: space-between;
    .ogImage {
      width: 100%;
      height: 200px;
      @include mq(sm) {
        width: 200px;
        aspect-ratio: 1/1;
      }
      text-align: center;
      img {
        width: auto;
        height: 200px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @include mq(sm) {
        width: calc(100% - 220px);
      }
      h1 {
        user-select: none;
        word-break: break-word;
        margin: 1rem 0;
        font-size: 1rem;
        @include mq(sm) {
          margin: 0 0 1rem 0;
        }
      }
      .detail {
        .price {
          margin-bottom: 1rem;
          .amount {
            font-weight: bold;
            font-size: 1rem;
          }
          .symbol {
            font-weight: bold;
            font-size: 0.8rem;
          }
          .timestamp {
            margin-left: 0.2rem;
            font-size: 0.8rem;
            color: rgba(var(--color-darkness3), 0.8)
          }
        }
        .label {
          text-align: center;
          font-weight: bold;
          padding: 0.8rem;
          color: rgb(var(--color-lightness1));
          background-color: #ffa724;
          object-fit: cover;
        }
      }
    }
  }
</style>