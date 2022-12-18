<template>
  <div class="ma-5 d-flex justify-center">
    <v-card
      v-if="item"
      min-width="400px"
      elevation="10"
      class="rounded-xl"
    >
      <v-card-title class="justify-center">
        <v-spacer class="mx-5" />
        Calendar
        <v-spacer />
        <v-btn
          color="red"
          fab
          small
          @click="deleteCalendar()"
        >
          <v-icon color="white">
            mdi-delete
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-row>
        <v-col class="ml-5">
          <v-card-title>Id</v-card-title>
          <v-card-subtitle>{{ item.id }}</v-card-subtitle>
          <v-card-title>Bg-color</v-card-title>
          <v-card-subtitle>{{ item.bg_color }}</v-card-subtitle>
          <v-card-title>Text-color</v-card-title>
          <v-card-subtitle>{{ item.text_color }}</v-card-subtitle>
        </v-col>
        <v-divider
          vertical
          class="my-3"
        />
        <v-col class="ml-5">
          <v-card-title>Active</v-card-title>
          <v-card-subtitle>{{ item.active }}</v-card-subtitle>
          <v-card-title>Order</v-card-title>
          <v-card-subtitle>{{ item.order }}</v-card-subtitle>
        </v-col>
      </v-row>
      <v-divider />
      <v-card-actions class="d-flex justify-center ma-3">
        <v-btn
          min-width="100px"
          class="white--text"
          color="#7fdae0"
          @click="updateModel = !updateModel"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog
      v-model="updateModel"
      class="d-flex justify-center round"
      width="400px"
    >
      <v-card
        class="rounded-xl"
        min-width="400px"
        height="450px"
      >
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
            class="white--text  mx-2"
            width="100px"
            color="#7fdae0"
            @click="updateModel = false"
          >
            Cancel
          </v-btn>
          <v-btn
            width="100px"
            class="white--text mx-2"
            color="#7fdae0"
            @click="update()"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: null,
      updateModel: false,
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
    this.fetch()
  },
  methods: {
    fetch () {
      const id = this.$route.params.id
      this.$store.dispatch('Cruds/getById', id)
        .then(data => (this.item = data.data))
    },
    update () {
      const id = this.$route.params.id
      const calendarPatterns = this.calendar
      this.$store.dispatch('Cruds/putUpdate', { id, calendarPatterns })
    },
    sync () {
      this.$store.dispatch('Auth/sync')
        .then((token) => {
          if (token) {
            this.$router.push(`/get/${this.$route.params.id}`)
          } else {
            this.$router.push('/')
          }
        })
    },
    deleteCalendar () {
      this.$store.dispatch('Cruds/deleteCalendar', this.$route.params.id)
        .then(() => this.$router.push('/getList'))
    }
  }
}
</script>
<style>
.round {
  border-radius: 50s0px;
}
</style>
