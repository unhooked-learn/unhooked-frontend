<template>
  <div class="fixed inset-x-0 bottom-0 z-50 w-full">
    <div class="p-6" :class="toastColor">
      <div class="flex items-center">
        <font-awesome-icon :icon="getIcon" size="4x" class="w-1/6" />

        <div class="w-5/6 pl-5">
          <h3 class="mb-2 text-xl font-semibold uppercase">{{$t(headline)}}</h3>

          <ul class="ml-4 list-disc list-inside">
            <li v-for="(item, idx) in answers.validationTexts" :key="idx">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="mt-8">
        <UHButton
          @click="nextQuestion"
          class="w-full font-semibold tracking-wider uppercase"
          :class="buttonColor"
        >{{$t('pages.quiz.next')}}</UHButton>
      </div>
    </div>
  </div>
</template>

<script>
import UHButton from '@/components/generics/UHButton'

export default {
  name: 'UHQuestionToast',
  components: {
    UHButton
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    answers: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    nextQuestion() {
      // todo naviagte to next question
      this.$emit('next')
    }
  },
  computed: {
    getIcon() {
      return this.answers.isCorrect ? 'check' : 'times'
    },
    toastColor() {
      return {
        'text-green-700 bg-green-100': this.answers.isCorrect,
        'text-red-700 bg-red-100': !this.answers.isCorrect
      }
    },
    headline() {
      return this.answers.isCorrect
        ? 'pages.quiz.answerCorret'
        : 'pages.quiz.answerWrong'
    },
    buttonColor() {
      return {
        'border-green-800 hover:bg-green-800 hover:text-green-100': this.answers
          .isCorrect,
        'border-red-800 hover:bg-red-800 hover:text-red-100': !this.answers
          .isCorrect
      }
    }
  }
}
</script>