const mutationsTypes = {
  SET_ARTICLES: 'SET_ARTICLES',
  SET_ARTICLE: 'SET_ARTICLE'
}

const sortArticleMapper = {
  // map articles id to order id
  1: 1,
  2: 2,
  3: 3,
  4: 7,
  5: 6,
  6: 4,
  7: 5,
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
    state.articles = articles.sort((a,b) => sortArticleMapper[a.id] - sortArticleMapper[b.id])
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
