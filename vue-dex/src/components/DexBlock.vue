<template>

	<div v-on:click="updateDetail(object.index)" v-bind:class="object.isFavorite ? 'dex-block-favorite' : 'dex-block'">
		<div class="dex-index">{{ object.index }}</div>
		<button 
		v-on:click.stop="onClickFavorite(object.index)"
		class = dex-favorite-button> 
			{{ object.isFavorite ? "★" : "☆" }}
		</button>
		<img class="dex-image" v-bind:src=" object.isFavorite ? object.favoriteImageUrl : object.imageUrl">
		<div class="dex-subtitle">
			<p>{{ object.name }}</p>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'dex-block',

    props: {
		object: Object,
    },

    methods: {

		updateDetail(index) {
			this.$store.dispatch('loadDetail', index)
		},

		onClickFavorite(index) {
			this.$store.dispatch('toggleFavorite', index)
		}
    }
  }
</script>

<style>

	.dex-block {
		background-color: rgba(255, 120, 40, 0.8);
	}

	.dex-block-favorite {
		background-color: rgba(255, 255, 40, 0.8);
	}

	.dex-block, .dex-block-favorite {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: 5fr 1fr;
		align-content: space-around;
		justify-content: space-between;
		font-family: Verdana;
		width: 200px;
		padding: 5px;
		margin: 5px;
		border: 5px solid #ccc;
	}

	.dex-favorite-button {
		width: 40px;
		height: 40px;
		padding: 0px;
		border-radius: 3px;
	}

	.dex-block:hover, .dex-block-favorite:hover {
		background-color: white;
	}

	.dex-block:active, .dex-block-favorite:active {
		background-color: gray;
	}

	.dex-image {
		grid-column: 1 / span 2;
		width: 96px;
		height: 96px;
		display: block;
		margin: 0 auto;
		object-fit: cover;
	}

	.dex-index {
		width: 50px;
		padding: 8px;
		background-color: rgba(0, 0, 0, 0.3);
		text-align: center;
	}

	.dex-subtitle {
		grid-column: 1 / span 2;
		background-color: rgba(0, 0, 0, 0.3);
		text-align: center;
	}

</style>