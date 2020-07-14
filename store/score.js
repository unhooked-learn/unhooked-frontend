const mutationsTypes = {
  SUBMIT_SCORE: 'SUBMIT_SCORE'
}

export const state = () => ({
  score: 0
})

export const getters = {
  unitScore(state) {
    return state.score
  }
}

export const mutations = {
  [mutationsTypes.SUBMIT_SCORE](state, score) {
    state.score = score
  }
}

export const actions = {
  async fetchScore({ commit }, unitId) {
    let score = await this.$axios.$get('score', {
      params: {
        unitId
      }
    })
    commit(mutationsTypes.SUBMIT_SCORE, score)
  },
  /**
   *
   * @param {*} param0
   * @param {*} unit  {unitId: number. value: number}
   */
  async submitScore({}, unit) {
    await this.$axios.$post('score', null, {
      params: {
        unitId: unit.unitId,
        value: unit.score
      }
    })
  }
}
