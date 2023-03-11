<script lang="ts">
  export let url: string;
  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let domain: string;
  
</script>

<a href={url} target="_blanck">
  <picture>
    <img src={imageUrl} alt={title} />
  </picture>
  <div class="info">
    <div class="content">
      <h1>{title}</h1>
      <div class="description">
        {description}
      </div>
    </div>
    <div class="domain">
      <img src="https://www.google.com/s2/u/0/favicons?domain={domain}" alt="{domain}"/>
      <div class="name">{domain}</div>
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