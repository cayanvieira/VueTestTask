<template>
  <v-app>
    <v-app-bar
      app
      color="#7fdae0"
      class="d-flex justify-end"
    >
      <v-btn
        color="white"
        @click="logout()"
      >
        Logout
        <v-icon>
          mdi-logout
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
  methods: {
    logout () {
      console.log('asdkjhn')
      this.$store.dispatch('Auth/logout')
    }
  }
}
</script>

<style>
.default{
  background-color: snow;
}
</style>
