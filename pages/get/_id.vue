<template>
  <div class="ma-5 d-flex justify-center" />
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
        .then(data => (this.item = data))
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
