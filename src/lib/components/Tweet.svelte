
<script lang="ts">
  export let href: string;
</script>


<div>
  <blockquote class="twitter-tweet">
    <a {href}>{href}</a>
  </blockquote>
</div>

<style lang="scss">
  div {
    text-align: center;
  }
</style>