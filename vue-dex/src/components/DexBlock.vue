<template>

	<div v-bind:class="object.isFavorite ? 'dex-block-favorite' : 'dex-block'">
		<div class="dex-index">{{ object.index }}</div>
		<button 
		v-on:click="toggleFavorite(object.index);
					object.isFavorite = isFavorite(object.index);
					" 
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
    }
  }
</script>

<style scoped></style>