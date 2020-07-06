<template>
  <div class="flex flex-col h-full">
    <!-- Question -->
    <div class="mb-2">
      <h4 class="mb-2 font-semibold text-md">{{ $t('pages.quiz.question') }}</h4>
      <slot name="heading">
        <p>{{question.title}}</p>
      </slot>
    </div>

    <!-- Answers -->
    <div class="mt-6">
      <div class="flex justify-between">
        <h4 class="font-semibold text-md">{{ $t('pages.quiz.answers') }}</h4>
        <span class="sr-only">{{type}}</span>
        <div class="text-gray-600">{{type}}</div>
      </div>

      <slot name="prebody">
        <p class="mb-2 text-sm text-gray-500">{{question.text}}</p>
      </slot>
      
      <slot name="body" />
    </div>

    <slot name="footer" :isAnswerSelected="isAnswerSelected">
      <div v-show="isAnswerSelected(hasAnswer)&&!check">
        <button
          @click.prevent="checkAnswer"
          class="flex justify-center w-full p-4 font-semibold text-white uppercase bg-gray-900 rounded-lg hover:bg-gray-800 mt-7"
        >{{ $t('pages.quiz.check') }}</button>
      </div>
    </slot>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  name: 'UHQuestionElement',
  data() {
    return {
      check: false
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    question: {
        type: Object,
        required: true,
    },
    hasAnswer: {
      type: Object | Array,
      required: true
    }
  },
  methods: {
    isAnswerSelected(answer) {
      return !isEmpty(answer)
    },
    checkAnswer() {
      this.check = !this.check
      this.$emit('check', this.check)
    }
  }
}
</script>