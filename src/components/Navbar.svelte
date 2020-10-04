<script>
  import Logo from './Logo.svelte';
  import Hamburger from './Hamburger.svelte';
  import NavItems from './NavItems.svelte';

  export let segment, navItems, logoSource, logoAlt;

  $: innerWidth = 0

</script>

<style lang="scss">
@import "../styles/theme.scss";

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: $white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0.75rem 0.75rem 1rem 0 rgba(0, 0, 0, 0.25);
    padding: 0.5rem 1rem;
    .menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
    }
  }
</style>

<svelte:window bind:innerWidth/>

<nav>
  <Logo 
	  {logoSource}
    {logoAlt}
  />
  {#if innerWidth < 900}
    <Hamburger />
  {:else}
    <div class="menu">
      <NavItems {segment} {navItems}/>
    </div>
  {/if}
</nav>