import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import { store } from './store/store'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1),

    isFavorite: function(index) {
		return localStorage.favorites && JSON.parse(localStorage.favorites).favoriteList.includes(index)
    },

    toggleFavorite: function(index) {
		if(localStorage.favorites) {
			let favorites = JSON.parse(localStorage.favorites)
			if (favorites.favoriteList.includes(index))
				favorites.favoriteList.splice(favorites.favoriteList.indexOf(index), 1)
			else
				favorites.favoriteList.push(index)
			localStorage.favorites = JSON.stringify(favorites)
        } else {
          localStorage.favorites = JSON.stringify(
			{
				favoriteList: [index],
			}
          )
        }
      },
  }
})

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')



// new Vue({
//   render: h => h(App),
// }).$mount('#app')
