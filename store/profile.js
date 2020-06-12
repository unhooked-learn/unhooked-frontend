const mutationsTypes = {
  SET_USER: 'SET_USER'
}

export const state = () => ({
  user: {
    name: 'John Doe',
    score: 250000,
    registered: true,
    loggedin: false,
    timestamp: Date.now()
  }
})

export const getters = {
  user(state) {
    return state.user
  }
}

export const mutations = {
  [mutationsTypes.SET_USER](state, user) {
    state.user = user
  }
}

export const actions = {
  async fetch({ commit }) {
    // this.$axios.setHeader("x-Username","emma")
    this.$axios.setHeader("Access-Control-Allow-Origin", "*")
    // this.$axios.setHeader("Content-Type", "text/plain")
    let user = await this.$axios.$get('user/details')
    console.log(user)
    commit(mutationsTypes.SET_USER, user)
  }
}