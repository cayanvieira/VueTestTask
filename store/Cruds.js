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
  },

  postCreate (_, { calendarPatterns }) {
    console.log(calendarPatterns)
    return this.$axios
      .post('https://sys-dev.searchandstay.com/api/admin/calendar_patterns', { calendar_patterns: calendarPatterns })
      .then(response => response.data)
      .catch(err => console.log(err))
  },

  putUpdate (_, { id, calendarPatterns }) {
    return this.$axios
      .put(`https://sys-dev.searchandstay.com/api/admin/calendar_patterns/${id}`, { calendar_patterns: calendarPatterns })
      .catch(err => console.log(err))
  },

  async deleteCalendar (_, id) {
    return await this.$axios
      .delete(`https://sys-dev.searchandstay.com/api/admin/calendar_patterns/${id}`)
      .catch(err => console.log(err))
  }

}

export const mutations = {

}
