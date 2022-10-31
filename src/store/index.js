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
  steamDeals: (state) => state.steam.splice(0, 5),
  humbleDeals: (state) => state.humblebundle.splice(0, 5),
  gamerGateDeals: (state) => state.gamerGate.splice(0, 5),
  greenManGamingDeals: (state) => state.greenManGaming.splice(0, 5),
  direct2DriveDeals: (state) => state.direct2Drive.splice(0, 5),
  gogDeals: (state) => state.gog.splice(0, 5),
  originDeals: (state) => state.origin.splice(0, 5),
  ubisoftDeals: (state) => state.ubisoft.splice(0, 5),
  fanaticalDeals: (state) => state.fanatical.splice(0, 5),
  wingamestoreDeals: (state) => state.wingamestore.splice(0, 5),
  gameBilletDeals: (state) => state.gameBillet.splice(0, 5),
  voiduDeals: (state) => state.voidu.splice(0, 5),
  epicDeals: (state) => state.epicGameStore.splice(0, 5),
  gamePlanetDeals: (state) => state.gamePlanet.splice(0, 5),
  gamesloadDeals: (state) => state.gamesload.splice(0, 5),
  twoGamesDeals: (state) => state.twoGames.splice(0, 5),
  indieGalaDeals: (state) => state.indieGala.splice(0, 5),
  blizzardDeals: (state) => state.blizzardShop.splice(0, 5),
  allYouPlayDeals: (state) => state.allYouPlay.splice(0, 5),
  dlGamerDeals: (state) => state.dlGamer.splice(0, 5),
  noctreDeals: (state) => state.noctre.splice(0, 5),

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