<template>
  <div class="d-flex align-center justify-center ma-5">
    <v-card>
      <v-card-title class="d-flex justify-center">
        Crud's
      </v-card-title>
      <v-divider />
      <v-row class="mt-5">
        <v-col
          v-for=" (item,i) in items"
          :key="i"
          class="d-flex justify-center"
        >
          <v-btn
            class="mb-5 home"
            :color="item.color"
            :to="item.to"
          >
            {{ item.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  title () { return 'oioi' },
  data () {
    return {
      items: [
        { name: 'GET', color: 'green', to: '/list' },
        { name: 'POST', color: 'blue' },
        { name: 'PUT', color: 'yellow' },
        { name: 'DELETE', color: 'red' }
      ]
    }
  },
  created () {
    this.sync()
  },
  methods: {

    sync () {
      this.$store.dispatch('Auth/sync')
        .then((token) => {
          if (token) {
            this.$router.push('/home')
          } else {
            this.$router.push('/')
          }
        })
    }
  }

}
</script>
<style>
.v-btn.home{
  min-height: 100px;
  width: 100px;
}
.v-card{
  max-width: 800px;
  display: block;
  width: 100%;
}
</style>
