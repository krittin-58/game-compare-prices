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
  alertConfig: {
    action: null, email: null, gameID: null, price: 0
  },
}

const getters = {
  steamDeals: (state) => state.steam.slice(0, 5),
  humbleDeals: (state) => state.humblebundle.slice(0, 5),
  gamerGateDeals: (state) => state.gamerGate.slice(0, 5),
  greenManGamingDeals: (state) => state.greenManGaming.slice(0, 5),
  direct2DriveDeals: (state) => state.direct2Drive.slice(0, 5),
  gogDeals: (state) => state.gog.slice(0, 5),
  originDeals: (state) => state.origin.slice(0, 5),
  ubisoftDeals: (state) => state.ubisoft.slice(0, 5),
  fanaticalDeals: (state) => state.fanatical.slice(0, 5),
  wingamestoreDeals: (state) => state.wingamestore.slice(0, 5),
  gameBilletDeals: (state) => state.gameBillet.slice(0, 5),
  voiduDeals: (state) => state.voidu.slice(0, 5),
  epicDeals: (state) => state.epicGameStore.slice(0, 5),
  gamePlanetDeals: (state) => state.gamePlanet.slice(0, 5),
  gamesloadDeals: (state) => state.gamesload.slice(0, 5),
  twoGamesDeals: (state) => state.twoGames.slice(0, 5),
  indieGalaDeals: (state) => state.indieGala.slice(0, 5),
  blizzardDeals: (state) => state.blizzardShop.slice(0, 5),
  allYouPlayDeals: (state) => state.allYouPlay.slice(0, 5),
  dlGamerDeals: (state) => state.dlGamer.slice(0, 5),
  noctreDeals: (state) => state.noctre.slice(0, 5),

  listDeals: (state) => state.listDeals,
}

const mutations = {
    listGames (state, data) {
      state.listGames = data
    },

    listStores (state, data) {
      state.listStores = data
    },

    listDeals (state, data) {
      state.listDeals = data
    },

    steam (state, data) {
      state.steam = data
    },

    humblebundle (state, data) {
      state.humblebundle = data
    },

    gamerGate (state, data) {
      state.gamerGate = data
    },

    greenManGaming (state, data) {
      state.greenManGaming = data
    },

    direct2Drive (state, data) {
      state.direct2Drive = data
    },

    gog (state, data) {
      state.gog = data
    },

    origin (state, data) {
      state.origin = data
    },

    ubisoft (state, data) {
      state.ubisoft = data
    },

    fanatical (state, data) {
      state.fanatical = data
    },

    wingamestore (state, data) {
      state.wingamestore = data
    },

    gameBillet (state, data) {
      state.gameBillet = data
    },

    voidu (state, data) {
      state.voidu = data
    },

    epicGameStore (state, data) {
      state.epicGameStore = data
    },

    gamePlanet (state, data) {
      state.gamePlanet = data
    },

    gamesload (state, data) {
      state.gamesload = data
    },

    twoGames (state, data) {
      state.twoGames = data
    },

    indieGala (state, data) {
      state.indieGala = data
    },
    
    blizzardShop (state, data) {
      state.blizzardShop = data
    },

    allYouPlay (state, data) {
      state.allYouPlay = data
    },

    dlGamer (state, data) {
      state.dlGamer = data
    },

    noctre (state, data) {
      state.noctre = data 
    },

    setAlertConfig (state, data) {
      state.alertConfig = { ...data }
    },

    clearAlertConfig (state) {
      state.alertConfig = {}
    },
}

const actions = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()],
})