<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-app-bar light>
        <v-btn @click="show--;"><v-icon>mdi-arrow-left</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="show++;"><v-icon>mdi-arrow-right</v-icon></v-btn>
    </v-app-bar>
      <Welcome v-show="show==0"/>
      <StoreWindow v-show="show==1"/>
    </v-content>
  </v-app>
</template>

<script>
import Welcome from './components/Welcome';
import StoreWindow from './components/StoreWindow'

export default {
  name: 'App',

  components: {
    Welcome,
    StoreWindow,
  },

  data: () => ({
    show: 0,
  }),
};
</script>
