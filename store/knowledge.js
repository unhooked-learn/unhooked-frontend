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
    let cards = await this.$axios.$get('knowledgebase')
    commit(mutationsTypes.SET_ARTICLES, cards)
  }
}
