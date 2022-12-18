<template>
  <div class="ma-5 d-flex justify-center">
    <v-card
      v-if="item"
      min-width="400px"
      elevation="10"
      class="rounded-xl"
    >
      <v-card-title class="justify-center">
        Item
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
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: null
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
    sync () {
      this.$store.dispatch('Auth/sync')
        .then((token) => {
          if (token) {
            this.$router.push(`/get/${this.$route.params.id}`)
          } else {
            this.$router.push('/')
          }
        })
    }
  }
}
</script>
