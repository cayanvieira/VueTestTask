<template>
  <div class="totalScreen d-flex justify-center align-center">
    <v-card
      elevation="10"
      class="d-flex justify-center align-center rounded-xl "
      min-width="500px"
      min-height="400px"
    >
      <v-col>
        <div>
          <v-row class="d-flex justify-center ">
            <v-img
              max-height="200px"
              max-width="200px"
              src="img/logo.png"
              class="ma-8"
            />
          </v-row>
          <v-row>
            <v-text-field
              v-model="email"
              label="E-mail"
              outlined
              class="mx-10 my-2"
              hide-details
            />
          </v-row>
          <v-row>
            <v-text-field
              v-model="password"
              outlined
              class="mx-10 mt-2"
              label="Password"
              hide-details
              type="password"
            />
          </v-row>
          <v-row class="d-flex justify-center">
            <v-btn
              color="#7fdae0"
              class="ma-5 white--text"
              width="100px"
              @click="login()"
            >
              Sign in
            </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-card>
    <v-dialog
      v-model="alertLogin"
      class="d-flex align-center"
      width="600px"
      height="300px"
    >
      <v-card
        width="600px"
        height="100px"
        class="d-flex justify-center"
      >
        <v-card-title>
          E-mail and password not found!
        </v-card-title>
        <div class="d-flex align-center">
          <v-btn
            class="white--text rounded-xl"
            color="#7fdae0"
            @click="alertLogin= false"
          >
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      email: null,
      password: null,
      alertLogin: false,
      whoami: null
    }
  },
  created () {
    this.sync()
  },
  methods: {
    async login () {
      const params = {
        email: this.email,
        password: this.password
      }

      await this.$store.dispatch('Auth/login', params)

      this.whoami = this.$store.state.Auth.user

      if (this.whoami) {
        return this.$router.push('/home')
      } else {
        this.alertLogin = true
      }
    },
    sync () {
      this.$store.dispatch('Auth/sync')
        .then((user) => {
          if (user) {
            this.$router.push('/home')
          }
        })
    }
  }
}
</script>

<style>
.totalScreen{
  height: 100%;
  background-color: #7fdae0;
}
</style>
