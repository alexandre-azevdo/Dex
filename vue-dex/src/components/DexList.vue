<template>

	<div class="dex-list">
		<div v-for="object in objects" :key="object.index">
			<dex-block :object="object" />
		</div>
	</div>
</template>

<script>
import DexBlock from '@/components/DexBlock.vue'
// import { mapState } from 'vuex'

  export default {
    name: 'dex-list',
    components: {
      DexBlock,
    },

    props: {
      favorites: Boolean,
    },

    computed: {
      objects() {
        return this.favorites ? this.$store.getters.favorites : this.$store.getters.filtered
      }
    }
  }
</script>

<style>
  
  .dex-list {
    display: grid;
    grid-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    padding: 50px;
  }


</style>