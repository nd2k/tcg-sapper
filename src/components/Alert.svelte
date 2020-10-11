<script>
  import FlyTransitionWrapper from './FlyTransitionWrapper.svelte';

  export let status;
</script>

<style lang="scss">
  @import '../styles/theme.scss';

  .container {
    position: absolute;
    top: 1rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 80;
    width: 80%;
    .alert {
      color: $white;
      padding: 0 1rem;
      margin-top: 1rem;
      border-radius: 10px;
      &.success {
        background-color: rgba($green, 0.7);
        border: 1px solid rgba($green, 0.9);;
      }
      &.error {
        background-color: rgba($dark-red, 0.7);;
        border: 1px solid rgba($dark-red, 0.9);;
      }
    }
  }

</style>

<FlyTransitionWrapper axe="y" direction="top">
<div class="container">
  <div class="{status === 'success' ? 'alert success' : 'alert error'}">
    <p>
      <slot />
    </p>
  </div>
</div>
</FlyTransitionWrapper>
