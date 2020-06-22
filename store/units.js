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
  SET_UNIT_CONTENT: 'SET_UNIT_CONTENT'
}

export const state = () => ({
  units: [],
  selected: clone(unitStub),
  content: []
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
    state.units = units
  },
  [mutationsTypes.SET_UNIT_CONTENT](state, content) {
    state.content = content
  }
}

export const actions = {
  selectUnit({ commit }, unit) {
    commit(mutationsTypes.SELECT_UNIT, unit)
  },
  clearUnit({ commit }) {
    commit(mutationsTypes.CLEAR_UNIT)
  },
  async fetch({ commit }) {
    this.$axios.setHeader("Access-Control-Allow-Origin", "*")
    this.$axios.setHeader("Content-Type", "application/json")
    let units = await this.$axios.$get('unit')
    // console.log(units)
    commit(mutationsTypes.SET_UNITS, units)
  },
  async fetchContent({ commit }, id) {
    this.$axios.setHeader("Access-Control-Allow-Origin", "*")
    this.$axios.setHeader("Content-Type", "application/json")
    let unitContent = await this.$axios.$get(`unit/${id}/contents`)
    //console.log(unitContent)
    commit(mutationsTypes.SET_UNIT_CONTENT, unitContent)
  }
}
