import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.config.productionTip = false

// Type cast required due to Vue 2.7 type system limitations with plugin options
// The shims-vue.d.ts provides proper type definitions, but Vue constructor needs explicit casting
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
} as any).$mount('#app')