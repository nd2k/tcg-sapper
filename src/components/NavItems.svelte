<script>
  export let segment, navItems;

</script>

<style lang="scss">
@import '../styles/theme.scss';

ul {
		margin: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
    float: left;
		padding: 0 1rem;
	} 

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 3px;
		background-color: $red;
		display: block;
		bottom: -1.8rem;
	}

	a {
		text-decoration: none;
		display: block;
		color: $font-color;
		font-weight: 500;	
		font-size: 1.1rem;
	}
</style>

<ul>
  {#each navItems as navItem}
  <li>
    <a aria-current="{ segment === navItem.currentAria ? 'page' : undefined}" href="{navItem.href}">
      {navItem.label}
    </a>
  </li>
  {/each}
</ul>
