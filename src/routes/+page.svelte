<script lang="ts">
  import FormatDate from '$lib/components/FormatDate.svelte';
  import type { PostsData } from '$lib/types/post';
  export let data: PostsData;

  const { contents } = data;
</script>

<section>
  {#each contents as content}
    <article>
      <div class="image">
        <picture>
          <source srcSet={`${content.image.url}?fit=crop&w=373&h=197&dpr=2&fm=webp`} media="(min-width: 768px)" type="image/webp"/>
          <source srcSet={`${content.image.url}?fit=crop&w=355&h=188&dpr=2&fm=webp`} media="(min-width: 576px)" type="image/webp"/>
          <source srcSet={`${content.image.url}?fit=crop&w=543&h=286&dpr=2&fm=webp`} media="(min-width: 425px)" type="image/webp"/>
          <source srcSet={`${content.image.url}?fit=crop&w=393&h=207&dpr=2&fm=webp`} media="(min-width: 320px)" type="image/webp"/>
          <img src={`${content.image.url}?fit=crop&w=543&h=286&fm=webp`} alt={content.title} width={368} height={194}/>
        </picture>
      </div>
      <div class="info">
        
        <h1>{content.title}</h1>
      
        <p class="preface">{content.preface}</p>
        <div class="status">
          <div class="publishedAt">
            <FormatDate
            dateString={content?.publishedAt ?? content.updatedAt}
						/>
					</div>
          <div class="tags">
            {#each content.tags as tag}
              <span>{tag.name}</span>              
            {/each}
          </div>
        </div>
      </div>
    </article>

  {/each}
</section>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;

    @include mq(sm) {
      grid-template-columns: 1fr 1fr;
    }

    @include mq(md) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    article {
      .image {
        // border-radius: 0.8rem;
        overflow: hidden;
        aspect-ratio: 1.9/1;
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: 0.3s;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .preface {

        }
        .status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .publishedAt {
            font-family: var(--font-mono);
          }
          .tags {
            span {
              background-color: rgb(var(--color-darkness1));
              color: rgb(var(--color-lightness1));
            }
          }
        }
      }
    }
  }
</style>