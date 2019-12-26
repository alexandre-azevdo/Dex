<template>

	<div class="dex-list">
    <div v-if="this.filterTrimmed.length > 0" class="dex-list-header">
      <button v-on:click="back()"> Back </button>
      <h1> Search for {{ this.filterTrimmed }} </h1>
    </div>

    <div class="dex-list-list">
      <div v-for="object in objects" :key="object.index">
        <dex-block :object="object" />
      </div>
		</div>
	</div>
</template>

<script>
import DexBlock from '@/components/DexBlock.vue'

  export default {
    name: 'dex-list',
    components: {
      DexBlock,
    },

    props: {
      favorites: Boolean,
      filter: String
    },

    computed: {
      objects() {
        return this.favorites ? this.$store.getters.favorites : this.$store.getters.filtered(this.filter)
      },

      filterTrimmed() {
        return this.filter ? this.filter.trim() : ''
      }
    },

    methods: {
      back() {
        this.$router.push({name: 'Home'})
      }
    }
  }
</script>

<style scoped>

  button {
    width: 5em;
  }

  .dex-list-header {
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 9fr;
    font-family: Verdana;
    text-align: center;
  }
  
  .dex-list-list {
    display: grid;
    grid-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    padding: 50px;
  }


</style>