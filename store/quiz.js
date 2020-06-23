import axios from 'axios'

const mutationsTypes = {
  SET_QUIZ: 'SET_QUIZ',
  SET_QUESTION: 'SET_QUESTION'
}

export const state = () => ({
  quiz: {
    questions: []
  },
  current: 1
})

export const getters = {
  quiz(state) {
    return state.quiz
  },
  total(state) {
    return state.quiz.questions.length
  },
  current(state) {
    return state.current
  },
  currentQuestion(state) {
    return state.quiz.questions[state.current - 1]
  }
}

export const mutations = {
  [mutationsTypes.SET_QUIZ](state, quiz) {
    state.quiz = quiz
  },
  [mutationsTypes.SET_QUESTION](state, current) {
    if (current >= 1 && current <= state.quiz.questions.length) {
      state.current = +current
    }
  }
}

export const actions = {
  async fetch({ commit }, params) {
    let quiz = await this.$axios.$get(`/unit/${params}/quiz`)
    commit(mutationsTypes.SET_QUIZ, quiz)
  },
  setQuestion({ commit }, question) {
    commit(mutationsTypes.SET_QUESTION, question)
  }
}
