import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Util } from './util.js' 

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
    },

    updateSearch(state, regex) {
      state.regex = regex
    },

    updateFavorite(state, index) {
      var objectIndex = state.objects.findIndex(x => x.index == index)
      state.objects[objectIndex].isFavorite = !state.objects[objectIndex].isFavorite
    }
  },

  getters: {

    filtered: state => {
      if (state.regex == "") {
          return state.objects
        }

        let exp = new RegExp(state.regex)

        return state.objects.filter(function(item) {
          return exp.test(item.name.toLowerCase())
        })
    },
  },

  actions: {

    toggleFavorite({ commit }, index) {
      Util.toggleFavorite(index)
      commit('updateFavorite', index)
    },

    async load({ commit }) {

        const response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=151');
        let results = (response.data.results);
        let objects = results.map( (object, index) => {
          const isFavorite = Util.isFavorite(index+1)
          return {
              index: index + 1,
              isFavorite: isFavorite,
              name: Util.capitalizeFirstLetter(object["name"]),
              imageUrl: Util.image(index+1, false),
              favoriteImageUrl: Util.image(index+1, true)
            }
        });
        commit('update', objects)
    }
  }
})