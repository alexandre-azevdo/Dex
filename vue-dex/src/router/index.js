import Vue from 'vue'
import Router from 'vue-router'
import DexList from '@/components/DexList'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/shiny',
			name: 'Shiny',
			component: DexList,
			props: { default: true, favorites: true }
		},
		{
			path: '/',
			name: 'Home',
			component: DexList,
			props: { default: true, favorites: false }
		}
	]
})