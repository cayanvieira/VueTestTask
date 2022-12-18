<template>
  <div class="d-flex align-center justify-center ma-5">
    <v-card elevation="10" max-width="500px" min-width="400px">
      <v-card-title class="d-flex justify-center">
        Calendar
      </v-card-title>
      <v-divider />
      <v-text-field
        v-model="calendar.bg_color"
        class="ma-3"
        outlined
        label=" Bg_color"
      />
      <v-text-field
        v-model="calendar.text_color"
        class="ma-3"
        outlined
        label="Text_color"
      />
      <v-select
        v-model="calendar.active"
        class="ma-3"
        outlined
        label=" Active"
        :items="activeSelect"
      />

      <v-card-actions class="d-flex justify-center mb-3">
        <v-btn
          class="white--text"
          color="#7fdae0"
          @click="create()"
        >
          Register
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {
      calendar: {
        bg_color: null,
        text_color: null,
        active: 1
      },
      activeSelect: ['1', '0']
    }
  },
  created () {
    this.sync()
  },
  methods: {
    create () {
      this.$store.dispatch('Cruds/postCreate', { calendarPatterns: this.calendar })
    },
    sync () {
      this.$store.dispatch('Auth/sync')
        .then((token) => {
          if (token) {
            this.$router.push('/post')
          } else {
            this.$router.push('/')
          }
        })
    }
  }

}
</script>
