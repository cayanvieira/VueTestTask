export const state = () => ({

})

export const getters = {}

export const actions = {
  getList () {
    return this.$axios
      .get('https://sys-dev.searchandstay.com/api/admin/calendar_patterns')
      .then(response => response.data)
      .catch(err => console.log(err))
  },

  getById (_, id) {
    return this.$axios
      .get(`https://sys-dev.searchandstay.com/api/admin/calendar_patterns/${id}`)
      .then(response => response.data)
      .catch(err => console.log(err))
  }
}

export const mutations = {

}
