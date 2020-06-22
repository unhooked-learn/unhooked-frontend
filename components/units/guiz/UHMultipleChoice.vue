<template>
  <UHQuestionElement type="mtc" :question="question" @check="isChecked" :hasAnswer="selectedAnswer">
    <template #body>
      <div class="space-y-3">
        <UHInputChoiceMultiple
          v-for="(item, idx) in question.questionAnswer"
          :key="idx"
          :item="item"
          :check="quiz.check"
          v-model="selectedAnswer"
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
      selectedAnswer: []
    }
  },
  methods: {
    getValidationTexts(items) {
      return items.map(i => i.validationText)
    },
    countCorrectAnswers(items) {
      return items.reduce(
        (a, b) => a + (b.isCorrect ? 1 : 0), 0
      )
    },
    hasCorrectAnswers(items) {
      // count all correct answers
      const countAllCorrect = this.countCorrectAnswers(this.question.questionAnswer);

      // count all selected Correct answers
      const countSelectCorrect = this.countCorrectAnswers(items);

     return countAllCorrect === countSelectCorrect
    }
  },
  watch: {
    selectedAnswer: {
      handler(value) {
        this.quiz.item = {
          isCorrect: this.hasCorrectAnswers(value),
          validationTexts: this.getValidationTexts(value)
        }

        //this.$emit('selectedAnswer', value)
      }
    }
  }
}
</script>