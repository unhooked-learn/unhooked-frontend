import axios from 'axios'

const mutationsTypes = {
  SET_QUIZ: 'SET_QUIZ',
  SET_QUESTION: 'SET_QUESTION',
  REWARD_POINTS: 'REWARD_POINTS',
  CLEAR_REWARD_POINTS: 'CLEAR_REWARD_POINTS',
}

const questionStub = {
  id: 0,
  orderId: 0,
  questionAnswers: [],
  questionType: "SINGLE_CHOICE",
  text: "",
  title: "",
}


export const state = () => ({
  quiz: {
    questions: [
      questionStub
    ]
  },
  current: 1,
  points: 0
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
  },
  earnedPoints(state) {
    return state.points;
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
  },
  [mutationsTypes.REWARD_POINTS](state, points) {
    state.points += points;
  },
  [mutationsTypes.CLEAR_REWARD_POINTS](state) {
    state.points = 0;
  }
}

export const actions = {
  async fetch({ commit }, params) {
    let quiz = await this.$axios.$get(`/unit/${params}/quiz`)
    commit(mutationsTypes.SET_QUIZ, quiz)
  },
  setQuestion({ commit }, question) {
    commit(mutationsTypes.SET_QUESTION, question)
  },
  rewardPoints({commit}, points = 100) {
    commit(mutationsTypes.REWARD_POINTS, points)
  },
  clearPoints({commit}) {
    commit(mutationsTypes.CLEAR_REWARD_POINTS)
  }
}
