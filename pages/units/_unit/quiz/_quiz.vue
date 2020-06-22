<template>
  <div>
    <header class="p-4 pb-6 text-white bg-gray-800">
      <div>
        <h1 class="text-lg font-semibold uppercase"># {{ getUnitParams }} - Unit</h1>
        <UHQuizProgress @goToQuestion="setNextQuestion" />
      </div>
    </header>
    <main class="p-4">
      <no-ssr>
        <component
          :is="questionType"
          :question="currentQuestion"
          @check="checkAnswer"
          @selectedAnswer="quizSelectedAnswer"
        />
      </no-ssr>
    </main>
    <transition>
      <UHQuestionToast :answers="selectedAnswer" v-if="showToast" @next="goToNextQuestion" />
    </transition>
  </div>
</template>

<script>
import UHSingleChoice from '@/components/units/guiz/UHSingleChoice'
import UHMultipleChoice from '@/components/units/guiz/UHMultipleChoice'
import UHMatching from '@/components/units/guiz/UHMatching'
import UHFillTheBlank from '@/components/units/guiz/UHFillTheBlank'

import UHQuizProgress from '@/components/units/guiz/elements/UHQuizProgress'
import UHQuestionToast from '@/components/units/guiz/elements/UHQuestionToast'

import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'clear',
  components: {
    UHSingleChoice,
    UHMultipleChoice,
    UHMatching,
    UHFillTheBlank,

    UHQuizProgress,
    UHQuestionToast
  },
  data() {
    return {
      showToast: false,
      selectedAnswer: {
        isCorrect: false,
        validationTexts: []
      }
    }
  },
  async fetch() {
    await this.$store.dispatch('quiz/fetch', this.getUnitParams)
  },
  mounted() {},
  methods: {
    ...mapActions({
      setQuestion: 'quiz/setQuestion'
      //nextQuestion: 'quiz/goToNextQuestion',
    }),
    setNextQuestion(question) {
      this.$router.push(
        this.localePath({
          name: 'units-unit-quiz-quiz',
          params: { unit: this.getUnitParams, quiz: question }
        })
      )
    },
    goToNextQuestion() {
      // reset check state
      this.checkAnswer(false)

      // check if can navigate to next quiz
      if (this.currentQuestionNumber < this.totalQuestions) {
        this.setNextQuestion(this.currentQuestionNumber + 1)
      } else {
        this.$router.push(
          this.localePath({
            name: 'units-unit-evaluation',
            params: { unit: this.getUnitParams }
          })
        )
      }
    },
    checkAnswer(value) {
      this.showToast = value
    },
    quizSelectedAnswer(value) {
      this.selectedAnswer = value
    }
  },

  computed: {
    ...mapGetters({
      currentQuestion: 'quiz/currentQuestion',
      totalQuestions: 'quiz/total',
      currentQuestionNumber: 'quiz/current'
    }),
    questionType() {
      return `UH${this.currentQuestion.type}`
    },
    getUnitParams() {
      return this.$route.params.unit
    }
  },
  watch: {
    $route: {
      handler({ params }) {
        // set Quiz #
        this.setQuestion(params.quiz)
      },
      immediate: true
    }
  }
}
</script>