<template>
	<div class = "page-setter">
		<button 
			v-if="hasPrevious"
			v-on:click="previousPage()"> 
			Página anterior
		</button>

		<button 
			v-if="hasNext"
			v-on:click="nextPage()">
			Próxima página
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
				return this.page < 3
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