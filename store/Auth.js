const Cookie = require('js-cookie')
export const state = () => ({
  whoami: null,
  token: null
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
      .then(({ data }) => {
        store.commit('SET_WHOAMI', {
          name: data.data.result.name,
          id: data.data.result.id
        }
        )
        store.commit('SET_TOKEN', data.data.result.access_token)
        return store.state.whoami
      })
      .catch((err) => {
        return console.log(err)
      })
  },

  sync (store) {
    const token = Cookie.get('token')
    const whoami = Cookie.get('whoami')
    if (token && whoami) {
      store.commit('SET_TOKEN', JSON.parse(token))
      store.commit('SET_WHOAMI', JSON.parse(whoami))
      return store.state.token
    }
  },

  logout (store) {
    console.log('poi')
    store.commit('SET_TOKEN', null)
    store.commit('SET_WHOAMI', null)
    this.$router.go('/')
  }
}

export const mutations = {
  SET_WHOAMI (state, whoami) {
    state.whoami = whoami
    Cookie.set('whoami', JSON.stringify(whoami))
  },
  SET_TOKEN (state, token) {
    state.token = token
    Cookie.set('token', JSON.stringify(token))
    this.$axios.setToken(token, 'Bearer')
  },
  REMOVE_TOKEN (state) {
    state.token = null

    this.$axios.setToken(false)
  }
}
