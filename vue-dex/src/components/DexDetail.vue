<template>
	<div id="dex-detail">
		<img v-bind:src="this.image">
		<p> Type: </p>
		<p v-if="this.types.length > 0" > {{ types[0] }}</p> 
		<p v-if="this.types.length > 1"> {{ types[1] }}</p>
		<p>{{ this.dex }}</p>
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
		}
	}


</script>

<style>
	
	#dex-detail {
		position: sticky;
		top: 0;
		margin: 2em;
		font-family: Verdana;
	}

	#dex-detail img {
		margin: 5em;
		background-color: white;
		border-width: 50px;
		border-color: gray;
		width: 70%;
	}
</style>