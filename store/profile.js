const mutationsTypes = {
  SET_USER: 'SET_USER',
  SET_USERNAME: 'SET_USERNAME',
  SET_EMAIL: 'SET_EMAIL',
  TRACK_ACTIVETIME: 'TRACK_ACTIVETIME'
}

export const state = () => ({
  user: {
    username: 'emma',
    email: '',
    score: 250000,
    registered: true,
    loggedin: false
  },
  active: {
    timestamp: Date.now(),
    // TODO: Move to local storage
    activeTime: 0
  }
})

export const getters = {
  user(state) {
    return state.user
  },
  username(state) {
    return state.user.username
  },
  active(state) {
    return state.active
  }
}

export const mutations = {
  [mutationsTypes.SET_USER](state, user) {
    state.user = user
  },

  [mutationsTypes.TRACK_ACTIVETIME](state) {
    state.active.activeTime++
  },
  [mutationsTypes.SET_USERNAME](state, name) {
    state.user.username = name
  },
  [mutationsTypes.SET_EMAIL](state, email) {
    state.user.email = email
  }
}

export const actions = {
  async fetch({ commit }) {
    let user = await this.$axios.$get('user/details')
    commit(mutationsTypes.SET_USER, user)
  },
  async deleteUser({}) {
    await this.$axios.$delete('user')
  },
  activeTime({ commit }) {
    let activeTime = setInterval(() => {
      commit(mutationsTypes.TRACK_ACTIVETIME)
    }, 60000)
  }
}
