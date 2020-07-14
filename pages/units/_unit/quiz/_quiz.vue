<template>
  <div>
    <header class="p-4 pb-6 text-white bg-gray-800">
      <div>
        <h1 class="text-lg font-semibold uppercase"># {{ getUnitParams }} - Unit</h1>
        <UHQuizProgress @goToQuestion="setNextQuestion" />
      </div>
    </header>
    <main class="p-4 bg-gray-100" :style="{ marginBottom: modalHeight + 'px' }">
      <template v-if="$fetchState.pending">
        <UHQuizLoading />
      </template>
      <template v-else>
        <client-only>
          <component
            :is="questionType"
            :question="currentQuestion"
            @check="checkAnswer"
            @selectedAnswer="quizSelectedAnswer"
          />
        </client-only>
      </template>
    </main>
    <transition>
      <UHQuestionToast
        :answers="selectedAnswer"
        v-show="showToast"
        :is-visible="showToast"
        @modalHeight="setModalHeight"
        @next="goToNextQuestion"
      />
    </transition>
  </div>
</template>

<script>
import UHQuizLoading from '@/components/units/quiz/UHQuizLoading'
import UHSingleChoice from '@/components/units/quiz/UHSingleChoice'
import UHMultipleChoice from '@/components/units/quiz/UHMultipleChoice'
import UHMatching from '@/components/units/quiz/UHMatching'
import UHFillTheBlank from '@/components/units/quiz/UHFillTheBlank'

import UHQuizProgress from '@/components/units/quiz/elements/UHQuizProgress'
import UHQuestionToast from '@/components/units/quiz/elements/UHQuestionToast'

import { SnakeCaseCapsToPascalCase } from '@/helpers/misc'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UnitsUnitQuizQuiz',
  layout: 'clear',
  fetchDelay: 1000,
  components: {
    UHQuizLoading,
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
      },
      modalHeight: 0
    }
  },
  async fetch() {
    await this.$store.dispatch('quiz/fetch', this.getUnitParams)
  },
  methods: {
    ...mapActions({
      setQuestion: 'quiz/setQuestion',
      rewardPoints: 'quiz/rewardPoints',
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
      // reward points
      if (this.selectedAnswer.isCorrect) {
        this.rewardPoints()
      }

      // reset check state
      this.checkAnswer(false)

      // check if can navigate to next quiz
      if (this.currentQuestionNumber < this.totalQuestions) {
        this.setNextQuestion(this.currentQuestionNumber + 1)
      } else {
        this.$router.push(
          this.localePath({
            name: 'units-unit-feedback',
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
    },
    setModalHeight(height) {
      this.modalHeight = height
    }
  },

  computed: {
    ...mapGetters({
      currentQuestion: 'quiz/currentQuestion',
      totalQuestions: 'quiz/total',
      currentQuestionNumber: 'quiz/current'
    }),
    questionType() {
      return `UH${SnakeCaseCapsToPascalCase(this.currentQuestion.questionType)}`
    },
    getUnitParams() {
      return this.$route.params.unit
    }
  },
  watch: {
    $route: {
      handler({ params }) {
        // set Quiz #
        this.setQuestion(params.quiz || 1)
      },
      immediate: true
    }
  },
}
</script>
