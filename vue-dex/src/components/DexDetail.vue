<template>
	<div v-if="detail != undefined" id="dex-detail">
		<div class="detail-name-container">
			<div class="dex-index">
				<p> {{ detail.index }} </p>
			</div>
			<h2> {{detail.names["en"]}} </h2>
			<h2> {{detail.names["ja"]}} </h2>
			<button 
			v-on:click.stop="onClickFavorite(detail.index)"
			class = dex-favorite-button> 
					{{ detail.isFavorite ? "★" : "☆" }}
			</button>
		</div>
		<img v-bind:src="this.image">
		<div class="detail-type-container">
			<span> Type: </span>
			<span class="detail-type" v-for="type in types" :key="type"> {{ type }} </span>
		</div>
		<p> {{ detail.dex["en"] }} </p>
		<p> {{ detail.dex["ja"] }} </p>
	</div>

</template>

<script type="text/javascript">
	import { Util } from '../store/util.js'

	export default {
		name: 'dex-detail',

		computed: {

			dex() {
				if (this.detail == undefined)
					return ""

				return this.detail.dex;
			},

			detail() {
				return this.$store.state.detail
			},

			types() {

				if (this.detail == undefined)
					return []

				return this.detail.types
			},

			image() {

				if (this.detail == undefined)
					return ""

				return Util.image(this.detail.index, this.detail.isFavorite);
			}
		},

		methods: {
			onClickFavorite(index) {
				this.$store.dispatch('toggleFavorite', index)
			}
		}
	}


</script>

<style>
	.detail-name-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.detail-type-container {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.detail-type {
		margin: 2em;
		padding: 2em;
		background-color: rgba(0, 0, 0, 0.3);
	}
	
	#dex-detail {
		position: sticky;
		top: 0;
		padding: 2em;
		font-family: Verdana;
	}

	#dex-detail img {
		margin: 5em;
		background-color: white;
		border: 5px solid;
		border-color: rgba(0, 0, 0, 0.3);
		width: 70%;
	}
</style>