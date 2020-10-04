<script>
  export let logoSource, logoAlt;
</script>

<style lang="scss">
  .logo {
    width: 4rem;
    height: 4rem;
    margin: auto 0;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
</style>

<div class="logo"> 
  <a href=".">
    <img src="{logoSource}" alt="{logoAlt}" />
  </a>
</div>