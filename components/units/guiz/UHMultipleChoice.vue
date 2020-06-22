<template>
  <UHQuestionElement
    type="mtc"
    :question="question"
    @check="isChecked"
    :hasAnswer="selectedAnswers"
  >
    <template #body>
      <div class="space-y-3">
        <UHInputChoiceMultiple
          v-for="(item, idx) in question.questionAnswers"
          :key="idx"
          :item="item"
          :check="quiz.check"
          v-model="selectedAnswers"
        />
      </div>
    </template>
  </UHQuestionElement>
</template>

<script>
import UHQuestionElement from '@/components/units/guiz/UHQuestionElement'
import UHInputChoiceMultiple from '@/components/units/guiz/elements/UHInputChoiceMultiple'
import quiz from '@/mixins/quiz/quiz'

export default {
  name: 'UHMultipleChoiseQuestion',
  mixins: [quiz],
  components: {
    UHQuestionElement,
    UHInputChoiceMultiple
  },
  data() {
    return {
      selectedAnswers: []
    }
  },
  methods: {
    getValidationTexts(items) {
      return items.map(i => i.validationText)
    },
    countCorrectAnswers(items, countOnly = true) {
      const countRightAnswers = items.reduce(
        (a, b) => a + (b.correct ? 1 : 0),
        0
      )

      const isCorrect = items.reduce((a, b) => a && b.correct, true)

      return isCorrect || countOnly ? countRightAnswers : -1
    },
    hasCorrectAnswers(items) {
      // count all correct answers
      const countAllCorrect = this.countCorrectAnswers(
        this.question.questionAnswers,
        true
      )

      // count all selected Correct answers
      const countSelectCorrect = this.countCorrectAnswers(items, false)

      return countAllCorrect === countSelectCorrect
    }
  },
  watch: {
    selectedAnswers: {
      handler(value) {
        this.quiz.item = {
          isCorrect: this.hasCorrectAnswers(value),
          validationTexts: this.getValidationTexts(value)
        }
      }
    }
  }
}
</script>