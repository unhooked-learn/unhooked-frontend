<template>
  <UHQuestionElement type="mtc" :question="question" @check="isChecked" :hasAnswer="selectedAnswers">
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
    countCorrectAnswers(items) {
      console.log(items);
      return items.reduce(
        (a, b) => a + (b.correct ? 1 : 0), 0
      )
    },
    hasCorrectAnswers(items) {
      // count all correct answers
      const countAllCorrect = this.countCorrectAnswers(this.question.questionAnswers);

      // count all selected Correct answers
      const countSelectCorrect = this.countCorrectAnswers(items);

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

        //this.$emit('selectedAnswers', value)
      }
    }
  }
}
</script>