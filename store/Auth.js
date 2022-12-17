export const state = () => ({
  user: null
})

export const getters = {}

export const actions = {

  async login (store, params) {
    await this.$axios
      .post('https://sys-dev.searchandstay.com/api/admin/login_json', {
        login: {
          email: params.email,
          password: params.password
        }
      })
      .then((response) => {
        store.commit('SET_USER', response.data.data.result)
        return store.state.user
      })
      .catch((err) => {
        return console.log(err)
      })
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.user = user
    window.localStorage.setItem('user', JSON.stringify(user))
  }
}
