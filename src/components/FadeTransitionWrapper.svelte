<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let show;

  onMount(() => {
    show = true
  })
</script>

{#if show}
<div in:fade="{{ duration:2000 }}">
  <slot />
</div>
{/if}