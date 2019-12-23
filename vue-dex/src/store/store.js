import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Util } from './util.js'
import { API } from './api.js'  

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store ({

  state: {
    objects: [],
    regex: "",
    page: 0,
    detail: undefined
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
      
      if (state.detail != undefined && state.detail.index == index)
        state.detail.isFavorite = Util.isFavorite(index)
    },

    updateDetail(state, detail) {
      state.detail = detail
    },

    nextPage(state) {
      state.page++
    },

    previousPage(state) {
      state.page--
    }
  },

  getters: {

    favorites: state => {
      return state.objects.filter(function(item) {
          return item.isFavorite
        })
    },

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

    nextPage({ commit, dispatch }) {
      commit('nextPage')
      dispatch('load')
    },

    previousPage({ commit, dispatch }) {
      commit('previousPage')
      dispatch('load')
    },

    toggleFavorite({ commit }, index) {
      Util.toggleFavorite(index)
      commit('updateFavorite', index)
    },

    async loadDetail({commit}, index) {
      API.getDetail(index).then(detail => { commit('updateDetail', detail) })
    },

    async load({ state, commit }) {
        API.getObjects(state.page).then(objects => { commit('update', objects) })
    }
  }
})