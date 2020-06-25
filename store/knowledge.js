const mutationsTypes = {
  SET_ARTICLES: 'SET_ARTICLES',
  SET_ARTICLE: 'SET_ARTICLE'
}

export const state = () => ({
  articles: [],
  article: []
})

export const getters = {
  articles(state) {
    return state.articles
  },
  article(state) {
    return state.article
  }
}

export const mutations = {
  [mutationsTypes.SET_ARTICLES](state, articles) {
    state.articles = articles
  },
  [mutationsTypes.SET_ARTICLE](state, article) {
    state.article = article
  }
}

export const actions = {
  async fetch({ commit }) {
    this.$axios.setHeader("Access-Control-Allow-Origin", "*")
    this.$axios.setHeader("Content-Type", "application/json")
    // TODO: HARDCODED USER
    this.$axios.setHeader("username",`emma`)
    let cards = await this.$axios.$get(
      `user/knowledgebases`
    )
    commit(mutationsTypes.SET_ARTICLES, cards)
  },
  async fetchArticle({ commit }, unit) {
    this.$axios.setHeader("Access-Control-Allow-Origin", "*")
    this.$axios.setHeader("Content-Type", "application/json")
    let card = await this.$axios.$get(
      `knowledgebase/unit/${unit}`
    )
    commit(mutationsTypes.SET_ARTICLE, card)
  }
}
