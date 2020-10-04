<script>
  import Slide from "./Slide.svelte";
  import Icon from 'fa-svelte';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

  let arrowLeft = faArrowLeft;
  let arrowRight = faArrowRight;
  let current = 0;
  let slideInterval;

  export let rotation = null, auto = null, interval = 2000;

  $: console.log(rotation);
  
  export let slidesData = null;
  slidesData[current].selected = true;

  function setSlideAutomation() {
    if(auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextHandler, interval);
    }
  }

  setSlideAutomation();

  function next() {
    nextHandler();
    setSlideAutomation()
  }

  function nextHandler() {
    slidesData[current].selected = false;
    if(current < (slidesData.length - 1)) {
      current ++;
    } else if(rotation) {
      current = 0;
    }
    slidesData[current].selected = true;
  }

  function prev() {
    prevHandler();
    setSlideAutomation();
  }

  function prevHandler() {
    slidesData[current].selected = false;
    if(current > 0) {
      current --;
    } else if(rotation) {
      current = slidesData.length - 1;
    }
    slidesData[current].selected = true;
  }
</script>

<style lang="scss">
  .slider {
    position: relative;
    overflow: hidden;
    height: 40rem;
  }
  .buttons {
    button {
      border: 2px solid #fff;
      background-color: transparent;
      color: #fff;
      cursor: pointer;
      padding: 0.8125rem 0.9375rem;
      border-radius: 50%;
      outline: none;
      &:hover {
        background-color: #fff;
        color: #333;
      }
      &#next {
        position: absolute;
        top: 50%;
        right: 1rem;
      }
      &#prev {
        position: absolute;
        top: 50%;
        left: 1rem;
      }
    }
  }
  
  
  
</style>

<div class="slider">
  {#each slidesData as slide}
    <Slide {slide} />
  {/each}
  <div class="buttons">
    <button id="prev" on:click={prev}>
      <Icon icon = {arrowLeft} />
    </button>
    <button id="next" on:click={next}>
      <Icon icon = {arrowRight} />
    </button>
  </div>
</div>
