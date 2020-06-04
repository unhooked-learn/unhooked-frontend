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
    let { Search } = await this.$axios.$get(
      'http://www.omdbapi.com/?s=Star%20Wars&page=1&apikey=466f9280'
    )
    commit(mutationsTypes.SET_ARTICLES, Search)
  }
}
