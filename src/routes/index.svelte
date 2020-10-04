<script>		
	import LandingCard from '../components/LandingCard.svelte';
	import TransitionWrapper from '../components/FlyTransitionWrapper.svelte';

	let screenWidth;
  let mobileWidth = 640;
</script>

<style lang="scss">
	@import '../styles/theme.scss';

	.container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 100vh;
		@media only screen and (max-width: $mobile-width) {
			flex-direction: column;
			height: auto;
    }
	}
	/* h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	} */
</style>

<svelte:head>
	<title>TCG - Entreprise Gouytoise</title>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} />

<div class="container">
	{#if screenWidth > mobileWidth}
		<TransitionWrapper axe="y" direction="down">
			<LandingCard 
				title="T.C.G" 
				source="./logo_tcg.jpg" 
				alt="TCG"
				presentation="TCG est une entreprise gouytoise qui vous propose une gamme de services liés aux travaux de chantier..."
				href="/tcg" />
		</TransitionWrapper>
	{:else}
	<TransitionWrapper axe="x" direction="left">
		<LandingCard 
			title="T.C.G" 
			source="./logo_tcg.jpg" 
			alt="TCG"
			presentation="TCG est une entreprise gouytoise qui vous propose une gamme de services liés aux travaux de chantier..."
			href="/tcg"/>
	</TransitionWrapper>
	{/if}
		
	{#if screenWidth > mobileWidth}
		<TransitionWrapper axe="y" direction="top">
			<LandingCard 
				title="T.T.G" 
				source="./logo_ttg.jpg" 
				alt="TTG"
				presentation="TTG est une entreprise gouytoise immobilière et vous propose une gamme de services tels que ..." 
				disabled=true/>
			</TransitionWrapper>
	{:else}
		<TransitionWrapper axe="x" direction="right">
			<LandingCard 
				title="T.T.G" 
				source="./logo_ttg.jpg" 
				alt="TTG"
				presentation="TTG est une entreprise gouytoise immobilière et vous propose une gamme de services tels que ..."
				disabled=true/>
		</TransitionWrapper>
	{/if}

	{#if screenWidth > mobileWidth}
		<TransitionWrapper axe="y" direction="down">
			<LandingCard 
			title="Centre de tri" 
			source="./empty.jpg" 
			alt="Centre de tri"
			presentation="TCG est une entreprise gouytoise qui propose également un service de centre de tri..."
			disabled=true/>
		</TransitionWrapper>
	{:else}
	<TransitionWrapper axe="x" direction="left">
		<LandingCard 
			title="Centre de tri" 
			source="./empty.jpg" 
			alt="Centre de tri"
			presentation="TCG est une entreprise gouytoise qui propose également un service de centre de tri..."
			disabled=true/>
	</TransitionWrapper>
	{/if}
</div>

