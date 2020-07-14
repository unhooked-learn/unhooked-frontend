import { clone } from 'lodash'

const unitStub = {
  id: 0,
  mediaName: '#',
  heading: 'RAINBOW RIDE',
  excerpt: 'Road to 120 Stars.',
  complete: false
}

const mutationsTypes = {
  SELECT_UNIT: 'SELECT_UNIT',
  CLEAR_UNIT: 'CLEAR_UNIT',
  SET_UNITS: 'SET_UNITS',
  SET_UNIT_CONTENT: 'SET_UNIT_CONTENT',
  SET_UNIT_FEEDBACK: 'SET_UNIT_FEEDBACK',
}

export const state = () => ({
  units: [],
  selected: clone(unitStub),
  content: [],
  feedback: []
})

export const getters = {
  units(state) {
    return state.units
  },
  unit(state) {
    return state.selected
  },
  content(state) {
    return state.content
  },
  feedback(state) {
    return state.feedback
  }
}

export const mutations = {
  [mutationsTypes.SELECT_UNIT](state, unit) {
    state.selected = unit
  },
  [mutationsTypes.CLEAR_UNIT](state) {
    state.selected = clone(unitStub)
  },
  [mutationsTypes.SET_UNITS](state, units) {
    state.units = units.sort((a,b) => a.orderId - b.orderId)
  },
  [mutationsTypes.SET_UNIT_FEEDBACK](state, feedback) {
    state.feedback = feedback
  },
  [mutationsTypes.SET_UNIT_CONTENT](state, content) {
    state.content = content.sort((a,b) => a.orderId - b.orderId)
  },
}

export const actions = {
  selectUnit({ commit }, unit) {
    commit(mutationsTypes.SELECT_UNIT, unit)
  },
  clearUnit({ commit }) {
    commit(mutationsTypes.CLEAR_UNIT)
  },
  async fetch({ commit }) {
    let units = await this.$axios.$get('user/units')
    commit(mutationsTypes.SET_UNITS, units)
  },
  async fetchContent({ commit, state }, orderId) {
     // Find unit by its orderid ¯\_(ツ)_/¯
    let unit = state.units.find(item => item.orderId = orderId)

    let unitContent = await this.$axios.$get(`unit/${unit.id}/contents`)
    commit(mutationsTypes.SET_UNIT_CONTENT, unitContent)
  },
  async fetchFeedback({ commit }, orderId) {
     // Find unit by its orderid  ¯\_(ツ)_/¯
    let unit = state.units.find(item => item.orderId = orderId)

    let feedback = await this.$axios.$get(`unit/${unit.id}/averagefeedback`)
    commit(mutationsTypes.SET_UNIT_FEEDBACK, feedback)
  },
  async postFeedback({}, feedback ) {
    // Find unit by its orderid  ¯\_(ツ)_/¯
    let unit = state.units.find(item => item.orderId = feedback.unit)

    await this.$axios.$post(`feedback/unit/${unit.id}?value=${feedback.rating}`)
  },
  async unlockUnit({}, unlock ) {
    await this.$axios.$post(`user/unit/${unlock}`)
  }
}
