<script>
  export let type = "button", href = null, mode = null, size = null, disabled = false;
</script>

<style lang="scss">
  @import "../styles/theme.scss";
  
  a,
  button {
    font: inherit;
    border: 1px solid $dark-red;
    background-color: $red;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    text-decoration: none;  
    width: 8rem; 
    font-weight: 600;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
    &:hover,
    &:active {
      background:$light-red;
      border-color: $red;
      box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
    }
    &:disabled,
    &:disabled:hover,
    &:disabled:active {
      background: #ccc;
      border-color: #ccc;
      color: #959595;
      box-shadow: none;
      cursor: not-allowed;
    }
    &.small {
      width: 4rem;
    }
    &.large {
      width: 12rem;
    }
  }
</style>

{#if href}
  <a {href} class="{mode} {size}"><slot /></a>
{:else if disabled}
  <button class="{mode} {size}" {type} disabled on:click><slot /></button>
{:else}
  <button class="{mode} {size}" {type} on:click><slot /></button>
{/if}