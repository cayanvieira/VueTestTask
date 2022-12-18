<template>
  <div class="ma-5 d-flex justify-center">
    <v-card
      v-if="dataList"
      class="rounded-xl"
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
</template>
<script>
export default {
  name: 'ListPage',

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
    sync () {
      this.$store.dispatch('Auth/sync')
        .then((token) => {
          if (token) {
            this.$router.push('/getList')
          } else {
            this.$router.push('/')
          }
        })
    },
    listHeaders () {
      Object.keys(this.dataList[0]).map((item) => {
        return this.headers.push(
          {
            text: item,
            align: 'start',
            sortable: false,
            value: item
          }
        )
      })
    }
  }
}
</script>
