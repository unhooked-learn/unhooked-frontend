import { clone } from 'lodash'

let badgeStub = {
  active: false,
  description: '',
  iconName: 'egg',
  name: ''
}

const mutationsTypes = {
  SELECT_BADGE: 'SELECT_BADGE',
  CLEAR_BADGE: 'CLEAR_BADGE',
  SET_BADGES: 'SET_BADGES'
}

export const state = () => ({
  badge: clone(badgeStub),
  badges: []
})

export const mutations = {
  [mutationsTypes.SELECT_BADGE](state, badge) {
    state.badge = badge
  },
  [mutationsTypes.CLEAR_BADGE](state) {
    state.badge = clone(badgeStub)
  },
  [mutationsTypes.SET_BADGES](state, badges) {
    state.badges = badges
  }
}

export const actions = {
  selectBadge({ commit }, badge) {
    commit(mutationsTypes.SELECT_BADGE, badge)
  },
  clearBadge({ commit }) {
    commit(mutationsTypes.CLEAR_BADGE)
  },
  async fetchBadges({ commit }) {
    let badges = await this.$axios.$get('achievements')
    // console.log(badges)
    commit(mutationsTypes.SET_BADGES, badges)
  }
}

export const getters = {
  badge(state) {
    return state.badge
  },
  badges(state) {
    return state.badges
  }
}
