const mutationsTypes = {
  SET_ARTICLES: 'SET_ARTICLES'
}

export const state = () => ({
  articles: []
})

export const getters = {
  articles(state) {
    return state.articles
  }
}

export const mutations = {
  [mutationsTypes.SET_ARTICLES](state, articles) {
    state.articles = articles
  }
}

export const actions = {
  async fetch({ commit }) {
    this.$axios.setHeader("Access-Control-Allow-Origin", "*")
    this.$axios.setHeader("Content-Type", "application/json")
    this.$axios.setHeader("username",`emma`)
    let cards = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}user/knowledgebases`
    )
    commit(mutationsTypes.SET_ARTICLES, cards)
  }
}
