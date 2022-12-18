<template>
  <div class="d-flex align-center justify-center ma-5">
    <v-col class="d-flex align-center justify-center">
      <div>
        <v-card
          height="50px"
          color="#7fdae0"
          class="d-flex justify-center align-center rounded-xl ma-5 white--text"
        >
          <v-card-title>Calendar Patterns</v-card-title>
        </v-card>
        <v-card
          v-if="dataList"
          elevation="10"
          class="rounded-xl ma-5"
        >
          <v-data-table
            :headers="headers"
            :items="dataList"
            item-key="id"
          >
            <template #[`item.id`]="{item}">
              <v-btn
                fab
                small
                color="#7fdae0"
                :to="`get/${item.id}`"
              >
                <v-icon color="white">
                  mdi-link
                </v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </v-col>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {
      dataList: [],
      headers: []
    }
  },
  watch: {
    dataList (value) {
      if (value) {
        this.listHeaders()
      }
    }
  },
  created () {
    this.sync()
    this.fetchList()
  },
  methods: {
    fetchList () {
      this.$store.dispatch('Cruds/getList')
        .then(data => (this.dataList = data.data.entities))
    },
    listHeaders () {
      Object.keys(this.dataList[0]).map((item) => {
        return this.headers.push(
          {
            text: item,
            align: 'center',
            sortable: false,
            value: item
          }
        )
      })
    },
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
