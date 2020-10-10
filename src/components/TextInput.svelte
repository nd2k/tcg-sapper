<script>
  import { onMount } from 'svelte';

  export let typeOfTextInput = 'text';
  export let labelOfTextInput = null;
  export let idOfTextInput = null;
  export let typeOfInput = 'input';
  export let rowsOfTextarea = null;
  export let bindingValue;
  export let valid = true;
  export let validityMessage = '';

  let root;
  let hasValue = false;
  let touched = false;

  onMount(() => {
    const formControl = root.querySelector('.form-control');
    formControl.addEventListener('blur', () => {
      if (formControl.value.length > 0) {
        return hasValue = true;
      } else {
        return hasValue = false;
      }
    });
  });

</script>

<style lang="scss">
  @import '../styles/theme.scss';

  .form-field {
    position: relative;
    margin: 1.4rem 0;
    textarea {
      min-height: 5rem;
      margin-bottom: 0;
    }
    .form-control {
      font-size: 1rem;
      border: none;
      width: 100%;
      height: 2rem;
      border-bottom: 1px solid $red;
      &:focus,
      &.has-value {
        outline: none;
        border-width: 2px;
        border-color: $red;
        transition: all 0.2s ease-out;
        + label {
          top: -1rem;
          color: $black;
          font-size: 0.8rem;
        }
      }
      &.has-value:not(:focus) + label {
        color: rgba($black, $alpha: 0.6);
      }
    }
    label {
      position: absolute;
      top: 0.8rem;
      left: 0.5rem;
      font-size: 1rem;
      transition: all 0.2s ease-out;
      color: rgba($black, 1);
      font-style: italic;
    }
    .invalid {
      background-color: rgba($dark-red, 0.3);
    }

    .error-message {
      color: $red;
      font-size: 0.8rem;
      margin-top: -0;
    }
  }

</style>

<div class="form-field" bind:this={root}>
  {#if typeOfInput === "textarea"}
  <textarea 
      class:invalid="{!valid && touched}" 
      rows="{rowsOfTextarea}" 
      id="{idOfTextInput}" 
      {bindingValue} 
      on:input class="form-control" 
      class:has-value="{hasValue}"
      on:blur={() => touched = true} />
  {:else}
  <input 
      class:invalid="{!valid && touched}" 
      type="{typeOfTextInput}" 
      id="{idOfTextInput}" 
      {bindingValue} 
      on:input class="form-control" 
      class:has-value="{hasValue}"
      on:blur={() => touched = true} />
  {/if}
  <label for="{idOfTextInput}">{labelOfTextInput}</label>
  {#if validityMessage && !valid && touched}
    <p class="error-message">{validityMessage}</p>
  {/if}
</div>

