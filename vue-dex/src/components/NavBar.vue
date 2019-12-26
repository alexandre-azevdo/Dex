<template>

	<nav id="nav-bar">
		<div class="nav-link"
		v-on:click="home()">
			<span>Home</span>
			<!-- <router-link :to="{ name: 'Home' }">Home</router-link> -->
		</div>
		<dex-search-form />
		<div class="nav-link"
		v-on:click="favorites()">
			<span>Favorites only</span>
			<!-- <router-link :to="{ name: 'Shiny' }">Favorites only</router-link> -->
		</div>
	</nav>

</template>

<script>

	import DexSearchForm from '@/components/DexSearchForm.vue'

	export default {
		name: 'nav-bar',

		components: {
			DexSearchForm
		},

		methods: {
			home() {
				this.$router.push({name: 'Home'})
			},

			favorites() {
				this.$router.push({name: 'Shiny'})
			}
		}
	}
	
</script>

<style scoped>
	.nav-link span {
    display: block;
    margin: 0;
    text-decoration: none;
    font-family: Verdana;
    font-size: 1em;
    color: black;
  }

  .nav-link:hover a {
    color: white;
  }

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: black;
    text-align: center;
    margin: 0px;
  }

  .nav-link:hover {
    background-color: tomato;
  }

  nav {
    width: 100%;
    height: 3em;
    background-color: white;
    padding: 0;

    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
  }
</style>