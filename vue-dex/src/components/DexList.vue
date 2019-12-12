<template>

	<div class="dex-list">
		<div v-for="object in objects" :key="object.index">
			<dex-block :object="object" />
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
		objects: Array,
    }
  }
</script>

<style scoped></style>