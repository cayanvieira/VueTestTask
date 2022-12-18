<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#7fdae0"
    >
      <div class="d-flex justify-center ma-3 white--text font-italic text-decoration-underline">
        {{ whoami.toUpperCase() }}
      </div>
      <v-list>
        <v-list-item-group>
          <v-list-item
            class=" color white--text"
            to="/home"
          >
            <v-icon
              class="mr-2"
              color="white"
            >
              mdi-home
            </v-icon>
            Página Inicial
          </v-list-item>
          <v-list-item
            class=" color white--text"
            @click="logout()"
          >
            <v-icon
              class="mr-2"
              color="white"
            >
              mdi-logout
            </v-icon>
            Logout
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="#7fdae0"
    >
      <v-btn
        color="#7fdae0"
        fab
        small
        elevation="0"
        @click="drawer=!drawer"
      >
        <v-icon color="white">
          mdi-menu
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="default">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    whoami () {
      return this.$store.state.Auth.whoami.name
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('Auth/logout')
    }
  }
}
</script>

<style>
.default{
  background-color: snow;
}
</style>
