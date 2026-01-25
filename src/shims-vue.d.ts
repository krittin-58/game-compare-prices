declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  import VueRouter from 'vue-router'
  import { Store } from 'vuex'
  import { Framework } from 'vuetify'

  interface Vue {
    $router: VueRouter
    $store: Store<any>
    $vuetify: Framework
  }
}

declare module 'vue/types/options' {
  import VueRouter from 'vue-router'
  import { Store } from 'vuex'
  import { Framework } from 'vuetify'

  interface ComponentOptions<V extends Vue> {
    router?: VueRouter
    store?: Store<any>
    vuetify?: Framework
  }
}

