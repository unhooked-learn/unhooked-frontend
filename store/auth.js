const mutationTypes = {
  AUTH_SIGN_IN: 'AUTH_SIGN_IN',
  AUTH_SIGN_UP: 'AUTH_SIGN_UP',
  SET_AUTH_USER: 'SET_AUTH_USER',
  SET_ERRORS: 'SET_ERRORS',
  CLEAN_ERROR: 'CLEAN_ERROR',
  SET_USERS_TOKEN: 'SET_USERS_TOKEN'
}

export const state = () => ({
  user: {},
  errors: {}
})

export const mutations = {
  [mutationTypes.SET_ERRORS](state, errors) {
    state.errors = errors
  },
  [mutationTypes.CLEAN_ERROR](state) {
    state.errors = {}
  },
  [mutationTypes.SET_AUTH_USER](state, user) {
    state.user = user
  },
  [mutationTypes.SET_USERS_TOKEN](state, token) {
    state.user.token = token
  }
}

export const actions = {
  setAuthUser({ commit }, user) {
    this.$axios.setHeader('username', user.username);
    this.$axios.setToken(user.token);

    commit('profile/SET_USERNAME', user.username, { root: true })
    commit('profile/SET_EMAIL', user.email, { root: true })
    commit(mutationTypes.SET_AUTH_USER, user)

    if (window) {
      localStorage.setItem('username', user.username)
      localStorage.setItem('token', user.token)
    }
    commit(mutationTypes.CLEAN_ERROR)
  },

  logout() {
    if (window) {
      localStorage.removeItem('username')
      localStorage.removeItem('token')
    }

    // todo: set logout request to api
  },

  // login
  signin({ commit, dispatch }, data) {
    this.$axios
      .$post('/api/auth/signin', data)
      .then(response => {
        dispatch('setAuthUser', response)
      })
      .catch(error => {
        commit(mutationTypes.SET_ERRORS, error.response.data.message)
      })
  },
  // register
  signup({ commit, dispatch }, data) {
    this.$axios
      .$post('/api/auth/signup', data)
      .then(response => {
        dispatch('setAuthUser', response)
      })
      .catch(error => {
        commit(mutationTypes.SET_ERRORS, error.response.data.message)
      })
  },

  async createUser({ commit }, username) {
    this.$axios.setHeader('username', username)
    this.$axios
      .$put('user')
      .then(() => {
        commit('profile/SET_USERNAME', username, { root: true })

        if (window) {
          localStorage.setItem('username', username)
        }

        commit(mutationTypes.CLEAN_ERROR)
      })
      .catch(error => {
        commit(mutationTypes.SET_ERRORS, error.response.data)
      })
  },
  loadLocalUser({ commit }) {
    if (window) {
      const username = localStorage.getItem('username')
      commit('profile/SET_USERNAME', username, { root: true })

      const token = localStorage.getItem('token')
      commit(mutationTypes.SET_USERS_TOKEN, token)
    }
  }
}

export const getters = {
  errors(state) {
    return state.errors
  },
  hasToken(state) {
    return !!state.user.token;
  }
}
