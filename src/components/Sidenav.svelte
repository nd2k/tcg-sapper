<script>
  import { fly } from 'svelte/transition';
  import { showMobileMenu } from '../store.js';

  export let segment, navItems;

  let open = false;

  $: showMobileMenu.subscribe(value => {
		open = value;
  });
  
  function openSidenav() {
    showMobileMenu.set(open = !open)
  }

</script>

<style lang="scss">
@import '../styles/theme.scss';

.sidenav-backdrop {
  position: absolute;
  width: 100vw;
  height: calc(100vh - 5rem);
  top: 5rem;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 100;
  .sidenav {
    position: absolute;
    right: 0;
    padding: 0 2rem;
    width: 40%;
    border-left: 2px solid $red;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: $white;
    nav:first-child {
      margin-top: 2rem;
    }
    a {
      text-decoration: none;
      display: block;
      padding: 0.5rem 0;
      color: $font-color;
      font-size: 1.5rem;
    }
    [aria-current] {
      position: relative;
      display: inline-block;
    }

    [aria-current]::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 3px;
      background-color: $red;
      display: block;
      bottom: 0.1rem;
    }
  }
}

</style>

{#if open}
<div class="sidenav-backdrop" on:click={openSidenav}>
  <div 
    class="sidenav" 
    in:fly="{{ x: 200, duration: 700 }}" 
    out:fly="{{ x: 200, duration: 500 }}">
    <nav>
      {#each navItems as navItem}
        <a
          aria-current="{ segment === navItem.currentAria ? 'page' : undefined}" 
          href="{navItem.href}">
          {navItem.label}
        </a>
      {/each}
    </nav>
  </div>
</div>
{/if}