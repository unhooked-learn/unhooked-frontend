<template>
  <UHQuestionElement
    type="ftb"
    :question="question"
    @check="isChecked"
    :hasAnswer="answers.selected"
  >
    <template #heading>
      <div class="-ml-1">
        <div class="flex flex-wrap space-x-1 item-center">
          <component
            class="first"
            v-for="(item, idx) in quest.items"
            :key="idx"
            :is="getComponentName(item.type)"
            :text="item.text"
            :item="getItemByGap(item.position)"
            @remove="removeSelctedAnswer"
            :position="item.position"
            :check="quiz.check"
          />
        </div>
      </div>
    </template>

    <template #prebody>
      <div class="flex justify-between">
        <div class="text-gray-600">{{question.text}}</div>
        <a href="#" class="text-purple-600" v-if="!quiz.check" @click.prevent="resetSelection">reset</a>
      </div>
    </template>

    <template #body>
      <UHFtbSelectedItem
        @selected="selectAnswerForNextGap(item)"
        v-for="(item, idx) in answers.all"
        :key="idx"
        :text="item.answerText"
      />
    </template>
  </UHQuestionElement>
</template>

<script>
import UHQuestionElement from '@/components/units/quiz/UHQuestionElement'
import UHFtbTextItem from '@/components/units/quiz/elements/UHFtbTextItem'
import UHFtbAnswerItem from '@/components/units/quiz/elements/UHFtbAnswerItem'
import UHFtbSelectedItem from '@/components/units/quiz/elements/UHFtbSelectedItem'
import fillTheBlank from '@/mixins/quiz/fillTheBlank'
import quiz from '@/mixins/quiz/quiz'

import { clone } from 'lodash'

export default {
  name: 'UHFillTheBlank',
  mixins: [fillTheBlank, quiz],
  components: {
    UHQuestionElement,
    UHFtbTextItem,
    UHFtbAnswerItem,
    UHFtbSelectedItem
  },
  methods: {
    hasCorrectAnswers(item) {
      // check if all gaps filled

      const hasCorrectCountAnswers = this.gaps.availableCount === item.length

      // check if all answers are correct
      let temp = item.map(i => ({ gap: i.gap, position: i.position }))

      const hasCorrectAnswers = temp.map(i => i.gap === i.position)

      return [hasCorrectCountAnswers, ...hasCorrectAnswers].reduce(
        (a, b) => a && b
      )
    },
    getValidationTexts(item) {
      return item.map(i => i.validationText)
    }
  },
  watch: {
    question: {
      handler(value) {
        this.init(value)
      },
      immediate: true
    },
    'answers.selected': {
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

<style scoped>
.first:first-child {
  @apply ml-1;
}
</style>