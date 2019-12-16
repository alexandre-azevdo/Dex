<template>

	<div class="dex-list">
		<div v-for="object in objects" :key="object.index">
			<dex-block :object="object" />
		</div>
	</div>
</template>

<script>
import DexBlock from '@/components/DexBlock.vue'
import { mapState } from 'vuex'

  export default {
    name: 'dex-list',
    components: {
      DexBlock,
    },

    computed: mapState({
      objects: state => state.filtered,
    })
  }
</script>

<style scoped></style>