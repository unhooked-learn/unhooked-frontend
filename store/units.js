import { clone } from 'lodash'

const unitStub = {
  id: 0,
  imgurl: '#',
  heading: 'RAINBOW RIDE',
  excerpt: 'Road to 120 Stars.',
  complete: false,
  active: false
}

const mutationsTypes = {
  SELECT_UNIT: 'SELECT_UNIT',
  CLEAR_UNIT: 'CLEAR_UNIT'
}

export const state = () => ({
  units: [
    {
      id: 1,
      imgurl:
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
      heading: 'Fear Of Missing Out',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, est.',
      complete: false,
      active: true
    },
    {
      id: 2,
      imgurl:
        'https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
      heading: 'Infinite Scrolling',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, est.',
      complete: true,
      active: false
    },
    {
      id: 3,
      imgurl:
        'https://images.unsplash.com/photo-1530467212787-ae644315e6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=60',
      heading: 'Pull To Refresh',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, est.',
      complete: false,
      active: false
    }
  ],
  selected: clone(unitStub)
})

export const getters = {
  units(state) {
    return state.units
  },
  unit(state) {
    return state.selected
  }
}

export const mutations = {
  [mutationsTypes.SELECT_UNIT](state, unit) {
    state.selected = unit
  },
  [mutationsTypes.CLEAR_UNIT](state) {
    state.selected = clone(unitStub)
  }
}

export const actions = {
  selectUnit({ commit }, unit) {
    commit(mutationsTypes.SELECT_UNIT, unit)
  },
  clearUnit({ commit }) {
    commit(mutationsTypes.CLEAR_UNIT)
  }
}
