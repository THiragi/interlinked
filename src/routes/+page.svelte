<script lang="ts">
  import type { PostsData } from '$lib/types/post';
  export let data: PostsData;

  const { contents } = data;


</script>

<section>
  {#each contents as content}
    <article>
      <div class="image">
        <picture>
          <!-- <source srcSet={`${content.image.url}?fit=crop&w=256&h=135&dpr=2&fm=webp`} media="(min-width: 576px)" type="image/webp"/>
          <source srcSet={`${content.image.url}?fit=crop&w=543&h=286&dpr=2&fm=webp`} media="(min-width: 425px)" type="image/webp"/>
          <source srcSet={`${content.image.url}?fit=crop&w=392&h=206&dpr=2&fm=webp`} media="(min-width: 320px)" type="image/webp"/> -->
          <img src={`${content.image.url}?fit=crop&w=543&h=286&fm=webp`} alt={content.title} width={368} height={194}/>
        </picture>

      </div>
      <h1>{content.title}</h1>
      <p>{content.preface}</p>
      <div>
        {@html content.body.replaceAll('/n', '<br/>')}
      </div>
    </article>

  {/each}
</section>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @include mq(md) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    article {
      .image {
        border-radius: 0.8rem;
        overflow: hidden;
        aspect-ratio: 1.9/1;
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: 0.3s;
        }
      }
    }
  }
</style>