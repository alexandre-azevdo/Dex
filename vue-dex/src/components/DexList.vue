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
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    /*margin: 0 auto;*/
    padding: 20px;
/*    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;*/
  }


</style>