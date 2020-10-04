<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition"

  export let axe, direction;

  let show;

  onMount(() => {
    show = true
  })
</script>

{#if show && axe === "x" && direction === "left"}
<div in:fly="{{ x: -200, duration: 2000 }}">
  <slot />
</div>
{/if}
{#if show && axe === "x" && direction === "right"}
<div in:fly="{{ x: 200, duration: 2000 }}">
  <slot />
</div>
{/if}
{#if show && axe === "y" && direction === "top"}
<div in:fly="{{ y: -200, duration: 2000 }}">
  <slot />
</div>
{/if}
{#if show && axe === "y" && direction === "down"}
<div in:fly="{{ y: 200, duration: 2000 }}">
  <slot />
</div>
{/if}