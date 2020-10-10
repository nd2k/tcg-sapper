<script>
  import Button from '../components/Button.svelte';
  import { createEventDispatcher } from 'svelte';
  import Icon from 'fa-svelte';
  import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
  
  export let title;

  let timesCircle = faTimesCircle;

	const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('closeModal');
  }
</script>

<style lang="scss">
  @import "../styles/theme.scss";

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
  .modal {
    position: fixed;
    top: 10%;
    left: 10%;
    max-height: 100vh;
    width: 80%;
    background: $white;
    border-radius: 10px;
    z-index: 80;
    // box-shadow: 0.75rem 0.75rem 1rem 0 rgba(0, 0, 0, 0.25),
    //             0.5rem 0.5rem 0.75rem 0 rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }

  .header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    h1 {
      padding: 1rem;
      margin: 0;     
    }
  }

  .content {
    padding: 1rem;
  }

  div :global(.icon) {
    font-size: 2rem;
    margin: 1rem 1rem 0 0;
    color: $red;
    cursor: pointer;
  }

  @media (min-width: $mobile-width) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>

<div class="modal-backdrop" on:click ={closeModal} />

<div class="modal">
  <div class="header">
    <h1>{title}</h1>
    <div class="closeBtn">
      <span on:click={closeModal}>
        <Icon class="icon" icon={timesCircle} />
      </span>
    </div>
  </div>
  <div class="content">
    <slot />
  </div>
</div>

  