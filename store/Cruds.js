export const state = () => ({

})

export const getters = {}

export const actions = {
  getList () {
    return this.$axios
      .get('https://sys-dev.searchandstay.com/api/admin/calendar_patterns')
      .then(response => response.data)
  }
}

export const mutations = {

}
