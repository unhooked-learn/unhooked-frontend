import { clone } from 'lodash'

let badgeStub = {
  active: false,
  description: '',
  icon: 'egg',
  name: ''
}

const mutationsTypes = {
  SELECT_BADGE: 'SELECT_BADGE',
  CLEAR_BADGE: 'CLEAR_BADGE'
}

export const state = () => ({
  badge: clone(badgeStub)
})

export const mutations = {
  [mutationsTypes.SELECT_BADGE](state, badge) {
    state.badge = badge
  },
  [mutationsTypes.CLEAR_BADGE](state) {
    state.badge = clone(badgeStub)
  }
}

export const actions = {
  selectBadge({ commit }, badge) {
    commit(mutationsTypes.SELECT_BADGE, badge)
  },
  clearBadge({ commit }) {
    commit(mutationsTypes.CLEAR_BADGE)
  }
}

export const getters = {
  badge(state) {
    return state.badge
  }
}
