<script>
  import Button from "../components/Button.svelte";

  export let source = null, alt = null, title = null, presentation = null, href = null, disabled = false;

</script>

<style lang="scss">
  @import '../styles/theme.scss';

  .card {
    overflow: hidden;
    position: relative;
    width: 10rem;
    height: 13rem;
    background-color: $white;
    margin: 1rem;
    padding: 1rem 1rem 0 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    box-shadow: 0.75rem 0.75rem 1rem 0 rgba(0, 0, 0, 0.25),
                0.5rem 0.5rem 0.75rem 0 rgba(255, 255, 255, 0.3);
    transition: 0.3s ease-in-out;
    border-radius: 10px;
    &:hover {
      box-shadow: 1.5rem 1.5rem 2rem 0 rgba(0, 0, 0, 0.25),
                  1rem 1rem 1.5rem 0 rgba(255, 255, 255, 0.3);
      height: 29rem;
      width: 15rem;
      .content {
        visibility: visible;
        opacity: 1;
        transition-delay: 0.3s;
        margin-top: 0;
      }
    }
    .imgBox {
      position: relative;
      width: 10rem;
      height: 10rem;
      z-index: 1;
      margin: 0 auto;
      img {
        max-width: 100%;
      }
    }
    .content {
      margin-top: -5rem;
      position: relative;
      padding: 1rem;
      text-align: center;
      color: #111;
      visibility: hidden;
      opacity: 0;
      transition: 0.1s ease-in-out;
      .presentation {
        text-align: justify;
      }
      .button {
        margin: 2rem;
      }
    }
  }
</style>

<div class="card">
  <div class="imgBox">
    <img src={source} {alt} />
  </div>
  <div class="content">
    <h1 class="title">{title}</h1>
    <p class="presentation">{presentation}</p>
    <div class="button">
      <Button {href} {disabled}>
        Continuez
      </Button>
    </div>
  </div>
</div>