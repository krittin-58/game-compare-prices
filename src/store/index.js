import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const state = {
  count: 0,
  listGames: [],
  listDeals: [],
  listStores: [],
  steam: [], 
  humblebundle: [], 
  gamerGate: [], 
  greenManGaming: [], 
  direct2Drive: [], 
  gog: [],
  origin: [],
  ubisoft: [],
  fanatical: [],
  wingamestore: [],
  gameBillet: [],
  voidu: [],
  epicGameStore: [],
  gamePlanet: [],
  gamesload: [],
  twoGames: [],
  indieGala: [],
  blizzardShop: [],
  allYouPlay: [],
  dlGamer: [],
  noctre: [],
}

const getters = {}

const mutations = {
    SET_ListGame (state, { data }) {
        state.listGames = data
    }
}

const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()],
})