<template>
  <v-app>
    <nav-vue :title="title"></nav-vue>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavVue from './components/Nav.vue';
export default {
  name: 'App',
  components: { NavVue },
  data: () => ({
    title: 'Game Compare Prices'
  }),
};
</script>
