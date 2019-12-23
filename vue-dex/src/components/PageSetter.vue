<template>
	<div class = "page-setter">
		<button 
			v-if="hasPrevious"
			v-on:click="previousPage()"> 
			&lt;&lt; Página anterior
		</button>

		<button 
			v-if="hasNext"
			v-on:click="nextPage()">
			Próxima página >>
		</button>
	</div>
</template>

<script>
	export default {
		name: 'page-setter',
		computed: {

			page() {
				return this.$store.state.page
			},

			hasNext() {
				return this.page < 2
			},

			hasPrevious() {
				return this.page > 0
			}
		},

		methods: {
			nextPage() {
				this.$store.dispatch('nextPage')
			},

			previousPage() {
				this.$store.dispatch('previousPage')
			}
		}
	}
</script>

<style>
	.page-setter {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 5em;
		background-color: rgba(255, 255, 40, 0.8);
		text-align: center;
	}

	.page-setter button {
		border: none;
		background-color: rgba(255, 120, 40, 0.8);
		width: 10%;
		height: 3em;
		border-radius: 8px;
		margin: 0 auto;
	}
</style>