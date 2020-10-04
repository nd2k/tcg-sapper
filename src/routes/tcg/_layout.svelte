<script>
  import Navbar from "../../components/Navbar.svelte";
  import Sidenav from "../../components/Sidenav.svelte";
  import FlyTransitionWrapper from "../../components/FlyTransitionWrapper.svelte";

  export let segment;

	let navItems = [
    { href: "tcg/.", label: "Accueil", currentAria: undefined },
    { href: "tcg/materiels", label: "Matériels", currentAria: "materiels" },
    { href: "tcg/chantiers", label: "Chantiers", currentAria: "chantiers" },
    { href: "tcg/containers", label: "Containers", currentAria: "containers" },
    { href: "tcg/partenaires", label: "Partenaires", currentAria: "partenaires" },
    { href: "tcg/emplois", label: "Offres d'emploi", currentAria: "emplois" }
  ]
</script>

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

  <slot />
  
</FlyTransitionWrapper>

