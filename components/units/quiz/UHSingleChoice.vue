<template>
  <UHQuestionElement type="scq" :question="question" @check="isChecked" :hasAnswer="selectedAnswer">
    <template #body>
      <div class="space-y-3">
        <UHInputChoiceSingle
          v-for="(item, idx) in question.questionAnswers"
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
import UHQuestionElement from '@/components/units/quiz/UHQuestionElement'
import UHInputChoiceSingle from '@/components/units/quiz/elements/UHInputChoiceSingle'
import quiz from '@/mixins/quiz/quiz'

export default {
  name: 'UHSingleChoise',
  components: {
    UHQuestionElement,
    UHInputChoiceSingle
  },
  mixins: [quiz],
  data() {
    return {
      selectedAnswer: {}
    }
  },
  watch: {
    selectedAnswer: {
      handler(value) {
        this.quiz.item = {
          isCorrect: value.correct,
          validationTexts: [value.validationText]
        }
      }
    }
  }
}
</script>