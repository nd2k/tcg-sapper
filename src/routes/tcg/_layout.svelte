<script>
  import Navbar from "../../components/Navbar.svelte";
  import Sidenav from "../../components/Sidenav.svelte";
  import FlyTransitionWrapper from "../../components/FlyTransitionWrapper.svelte";
  import ContactButton from "../../components/ContactButton.svelte";
  import Alert from '../../components/Alert.svelte';
  import Spinner from '../../components/Spinner.svelte';

  import { showAlertNotification, alertMessage, showSpinner } from '../../store';

  export let segment;

  let message = '';
  let status = '';
  let loading = false;

  $: showAlertNotification.subscribe(value => {
    status = value;
  })

  $: alertMessage.subscribe(value => {
    message = value;
  })

  $: showSpinner.subscribe(value => {
    loading = value
  })

	let navItems = [
    { href: "tcg/.", label: "Accueil", currentAria: undefined },
    { href: "tcg/materiels", label: "Matériels", currentAria: "materiels" },
    { href: "tcg/chantiers", label: "Chantiers", currentAria: "chantiers" },
    { href: "tcg/containers", label: "Containers", currentAria: "containers" },
    { href: "tcg/partenaires", label: "Partenaires", currentAria: "partenaires" },
    { href: "tcg/emplois", label: "Offres d'emploi", currentAria: "emplois" }
  ]
</script>

{#if status === 'success'} 
  <Alert status={status}>
    <p>{ message }</p>
  </Alert>
{:else if status === 'error'}
  <Alert status={status}>
    <p>{ message }</p>
  </Alert>
{/if}

<FlyTransitionWrapper axe="x" direction="left">
  <Navbar 
    {segment} 
    {navItems} 
    logoSource="./logo_tcg.jpg"
    logoAlt="T.C.G"
  />
  <Sidenav 
    {segment} 
    {navItems}
  />

  {#if loading}
    <Spinner />
  {/if}

  <slot />

  <ContactButton />
  
</FlyTransitionWrapper>

