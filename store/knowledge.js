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
    let cards = await this.$axios.$get(
      `user/knowledgebases`
    )
    commit(mutationsTypes.SET_ARTICLES, cards)
  },
  async fetchArticle({ commit }, unit) {
    let card = await this.$axios.$get(
      `knowledgebase/unit/${unit}`
    )
    commit(mutationsTypes.SET_ARTICLE, card)
  }
}
