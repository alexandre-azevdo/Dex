import Vue from 'vue'
import Router from 'vue-router'
import DexList from '@/components/DexList'

Vue.use(Router)

export default new Router({
	routes: [
			{
			path: '/',
			name: 'Home',
			component: DexList,
			props: { favorites: false, filter: '' }
		},
		{
			path: '/shiny',
			name: 'Shiny',
			component: DexList,
			props: { favorites: true, filter: '' }
		},
		{
			path: '/search',
			name: 'Search',
			component: DexList,
			props: (route) => ({ filter: route.query.q, favorites: false })
		},
	]
})