<script>
  export let slide;

  let screenWidth;
  let mobileWidth = 640;
</script>

<style lang="scss">
  .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      &.current {
        opacity: 1;
        .content {
          opacity: 1;
          transform: translateX(37.5rem);
          transition: all 0.7s ease-in-out 0.3s;
        }
      }
      .content {
        position: absolute;
        bottom: 2rem;
        left: -37.5rem;
        opacity: 0;
        width: 37.5rem;
        background-color: rgba(255, 255, 255, 0.8);
        color: #333;
        padding: 2.2rem;
        h1 {
          margin-bottom: 1rem;
        }
      }
    }
</style>

<svelte:window bind:innerWidth={screenWidth} />

<div 
  class="slide" 
  class:current="{slide.selected}"
  style="background: url('{slide.url}') no-repeat center center/cover;">
  {#if screenWidth > mobileWidth}
    <div class="content">
      <h1>{slide.title}</h1>
      <p>{slide.description}</p>
    </div>
  {/if}
</div>