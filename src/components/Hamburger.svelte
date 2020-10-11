<script>
  import { showMobileMenu } from '../store.js';

  let open; 

  $: showMobileMenu.subscribe(value => {
		open = value;
  });

  function openSidenav() {
    showMobileMenu.set(open = !open)
  }

</script>

<style lang="scss">
  .hamburger {
    z-index: 20;
    height: 24px; 
    cursor: pointer;
    overflow: hidden;
    svg {
    transition: transform 0.3s ease-in-out;
      line {
        stroke: currentColor;
        stroke-width: 3;
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  .icon {
    svg {
      transform: scale(1);
    }
    #top {
      transform: translate(6px, 0px) rotate(45deg);
    }
    #middle {
      opacity: 0;
    }
    #bottom {
      transform: translate(-12px, 9px) rotate(-45deg);
    }
  }
	
</style>

<div 
  class="hamburger"
  class:icon={$showMobileMenu}
  on:click={openSidenav}
>
  <svg width=38 height=24>
		<line id="top" x1=0 y1=2  x2=32 y2=2/>
		<line id="middle" x1=0 y1=12 x2=24 y2=12/>
		<line id="bottom" x1=0 y1=22 x2=32 y2=22/>
	</svg>
</div>