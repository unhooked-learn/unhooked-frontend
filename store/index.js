export const state = () => ({
  selectedBadge: {}
})

const mutationsTypes = {
  SELECT_BADGE: 'SELECT_BADGE'
}

export const mutations = {
  [mutationsTypes.SELECT_BADGE](state, badge) {
    state.selectedBadge = badge
  }
}

export const actions = {
  selectBadge({ commit }, badge) {
    commit(mutationsTypes.SELECT_BADGE, badge)
  }
}

export const getters = {
  selectedBadge(state) {
    return state.selectedBadge
  }
}
