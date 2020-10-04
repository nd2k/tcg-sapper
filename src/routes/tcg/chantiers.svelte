<script>
  import FadeTransitionWrapper from "../../components/FadeTransitionWrapper.svelte";
  import Slider from "../../components/Slider.svelte";

  const slidesData = [
    {
      "title": "Travail#1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "url": "./travaux1.jpg"
    },
    {
      "title": "Travail#2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "url": "./travaux2.jpg"
    },
    {
      "title": "Travail#3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "url": "./travaux3.jpg"
    },
    {
      "title": "Travail#4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "url": "./travaux4.jpg"
    },
    {
      "title": "Travail#5",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "url": "./travaux5.jpg"
    },
    {
      "title": "Travail#6",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "url": "./travaux6.jpg"
    },
  ]
</script>

<svelte:head>
	<title>TCG - Chantiers</title>
</svelte:head>

<FadeTransitionWrapper>
  <h1>Chantiers</h1>

  <Slider {slidesData} rotation auto interval=5000 />

</FadeTransitionWrapper>
