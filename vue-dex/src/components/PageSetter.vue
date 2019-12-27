<template>
	<div class = "page-setter">
		<button :class="[hasPrevious ? '' : 'hidden']"
			v-on:click="previousPage()"> 
			&lt;&lt; Previous
		</button>

		<p> Page {{this.page+1}} of {{this.maxPage}} </p>

		<button 
			:class="[hasNext ? '': 'hidden']"
			v-on:click="nextPage()">
			Next >>
		</button>
	</div>
</template>

<script>

	import { API } from '../store/api.js' 

	export default {
		name: 'page-setter',
		computed: {

			page() {
				return this.$store.state.page
			},

			hasNext() {
				return this.page < this.maxPage
			},

			hasPrevious() {
				return this.page > 0
			},

			maxPage() {
				return API.fetchData.data.length
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

<style scoped>

	p {
		font-family: Verdana;
	}

	.page-setter {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 5em;
		background-color: rgba(255, 255, 40, 0.8);
		text-align: center;
	}

	button {
		border: none;
		background-color: rgba(255, 120, 40, 0.8);
		width: 10%;
		height: 3em;
		border-radius: 8px;
		margin: 0 auto;
	}

	.hidden {
		visibility: hidden;
	}
</style>