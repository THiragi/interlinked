<script lang="ts">
  import type { PostsData } from '$lib/types/post';
  export let data: PostsData;

  const { contents } = data;


</script>

<section>
  {#each contents as content}
    <article>
      <h1>{content.title}</h1>
      <p>{content.preface}</p>
      <div>
        {@html content.body.replaceAll('/n', '<br/>')}
      </div>
    </article>    
  {/each}
</section>