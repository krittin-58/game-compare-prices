<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Game Compare Prices</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon><v-icon>mdi-bell</v-icon></v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
