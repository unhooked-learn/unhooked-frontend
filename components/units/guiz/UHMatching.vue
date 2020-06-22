<template>
    <UHQuestionElement type="matching" :question="question" @check="isChecked" :hasAnswer="selectedAnswer">

    <template #body>
      <div class="space-y-3">
       matching
      </div>
    </template>
  </UHQuestionElement>
</template>

<script>
import UHQuestionElement from '@/components/units/guiz/UHQuestionElement'
export default {
    name: 'UHMatching',
    components: {
        UHQuestionElement
    },
     data() {
    return {
      selectedAnswer: {},
      check: false
    }
  },
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    isChecked(check) {
      this.check = check
      this.$emit('check', check)
    }
  },
  watch: {
    selectedAnswer: {
      handler(value) {
        this.$emit('selectedAnswer', value)
      }
    }
  }
}
</script>