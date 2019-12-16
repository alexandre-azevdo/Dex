import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const Util = {
  
  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  },

  image: function(index, isFavorite) {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (isFavorite ? "shiny/" : "") + index + ".png"
  },

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
  }
}

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

    toggleFavorite(state, index) {
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
        alert('Filtered')
        alert(state.objects) 

        return state.objects.filter(function(item) {
          return exp.test(item.name.toLowerCase())
        })
    },
  },

  actions: {

    toggleFavorite({ commit }, index) {
      Util.toggleFavorite(index)
      commit('toggleFavorite', index)
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