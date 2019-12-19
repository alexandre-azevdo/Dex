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
		font-family: Verdana;
		min-width: 200px;
		max-width: 400px;
		padding: 5px;
		margin: 5px;
		border: 5px solid #ccc;
	}

	.dex-favorite-button {
		float: right;
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
		width: 96px;
		height: 96px;
		display: block;
		margin: 0 auto;
		object-fit: cover;
	}

	.dex-index {
		float: left;
		position: relative;
		width: 50px;
		padding: 8px;
		background-color: rgba(0, 0, 0, 0.5);
		text-align: center;
	}

	.dex-subtitle {
		width: 100%;
		height: 20%;
		position: relative;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		text-align: center;
	}

</style>