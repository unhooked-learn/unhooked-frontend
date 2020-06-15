const mutationsTypes = {
  SET_USER: 'SET_USER',
  TRACK_ACTIVETIME: 'TRACK_ACTIVETIME'
}

export const state = () => ({
  user: {
    name: 'John Doe',
    score: 250000,
    registered: true,
    loggedin: false,
 
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
  }
}

export const actions = {
  async fetch({ commit }) {
    this.$axios.setHeader("username","emma")
    this.$axios.setHeader("Access-Control-Allow-Origin", "*")
    let user = await this.$axios.$get('user/details')
    // console.log(user)
    commit(mutationsTypes.SET_USER, user)
  },
  activeTime({ commit }) {
    let activeTime = setInterval(()=>{
      commit(mutationsTypes.TRACK_ACTIVETIME)
    }, 60000) 
    
  }
}