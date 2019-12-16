import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store ({
  state: {
    objects: [],
    regex: ""
  },

  mutations: {
    update(state, objects) {
      state.objects = objects
      alert(state.objects)

    },
    updateSearch(state, regex) {
      state.regex = regex
    }
  },

  getters: {
    filtered: state => {
      if (state.regex == "") {
          return state.objects
        }

        let exp = new RegExp(state.regex)
        alert('Filtered')
        alert(state.objects) 

        return state.objects.filter(function(item) {
          return exp.test(item.name.toLowerCase())
        })
    }
  },

  actions: {
    async load({ commit }) {

        const response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=151');
        let results = (response.data.results);
        let objects = results.map( (object, index) => {
          const isFavorite = false //this.isFavorite(index+1)
          return {
              index: index + 1,
              isFavorite: isFavorite,
              name: object["name"],//this.capitalizeFirstLetter(object["name"]),
              imageUrl: "",//this.image(index+1, false),
              favoriteImageUrl: ""//this.image(index+1, true)
            }
        });
        commit('update', objects)
    }
  }
})