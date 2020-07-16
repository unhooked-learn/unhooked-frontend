<template>
  <div class="flex w-full px-3 py-2 border-2 rounded-lg shadow-md" :class="styleClasses">
    <div class="w-2/5 text-left">
      <button
        class="h-5 font-semibold leading-5 tracking-wide border-b-2 border-gray-500 border-dashed"
        @click.prevent="remove(itemLeft)"
        :disabled="check"
        :class="{ 'w-32' : !itemLeft.text }"
      >{{itemLeft.text || '&nbsp;'}}</button>
    </div>

    <span class="flex self-center justify-center w-1/5">
      <font-awesome-icon :icon="icon" />
    </span>

    <div class="w-2/5 text-right">
      <button
        class="h-5 font-semibold leading-5 tracking-wide border-b-2 border-gray-500 border-dashed"
        @click.prevent="remove(itemRight)"
        :disabled="check"
        :class="{ 'w-32' : !itemRight.text }"
      >{{itemRight.text || '&nbsp;'}}</button>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  name: 'UHMatchingRow',
  props: {
    itemLeft: {
      type: Object,
      default: () => ({})
    },
    itemRight: {
      type: Object,
      default: () => ({})
    },
    check: {
      type: Boolean,
      default: false
    },
    answers: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array
    }
  },
  methods: {
    onChange(e) {
      let currentValue = [...this.value]

      if (this.hasAnswersValues) {
        currentValue.push(
          this.prepareAnswerObject(
            this.answers.find(item => this.getAnswer(item))
          )
        )
      } else {
        currentValue = currentValue.filter(item =>
          this.removeItemFromSelection(item)
        )
      }

      this.$emit('input', currentValue)
    },
    removeItemFromSelection(item) {
      return !(
        this.itemLeft.text === item.left.text ||
        this.itemRight.text === item.right.text
      )
    },
    prepareAnswerObject(item) {
      return {
        item,
        left: this.itemLeft,
        right: this.itemRight,
        isPairCorrect: this.isAnswerCorrect(item)
      }
    },
    remove(item) {
      this.$emit('remove', item)
    },
    isCorrect() {
      // check if answer is provided
      if (!this.hasAnswersValues) {
        return false
      }

      // if no answeres provided skip
      if (!this.answers.length) {
        return false
      }

      // check if left and right answer has different types
      if (this.itemRight.key === this.itemLeft.key) {
        // if they are the same, return false
        return false
      }

      // Filter item by selected field
      let item = this.answers.find(item => this.getAnswer(item))
      // and check if it is correct
      return this.isAnswerCorrect(item)
    },
    // check if  key is present
    getAnswer(item, key = 'itemRight') {
      return (
        item.matchText === this[key].text || item.answerText === this[key].text
      )
    },
    // check if anser is correct
    isAnswerCorrect(item) {
      let a1 = item[this.itemLeft.key] === this.itemLeft.text
      let a2 = item[this.itemRight.key] === this.itemRight.text

      return a1 && a2
    }
  },
  computed: {
    hasAnswersValues() {
      return !(isEmpty(this.itemLeft) || isEmpty(this.itemRight))
    },
    icon() {
      if (!this.check) {
        return 'question'
      }

      return this.isCorrect() ? 'check' : 'times'
    },

    styleClasses() {
      return {
        'bg-gray-200 border-gray-800 text-gray-800': !this.check,
        'bg-red-100 border-red-800 text-red-800':
          this.check && !this.isCorrect(),
        'bg-green-100 border-green-800 text-green-800':
          this.check && this.isCorrect()
      }
    }
  },
  watch: {
    // emit onChange if itemLeft or itemRight has changed
    itemLeft: {
      handler: 'onChange'
    },
    itemRight: {
      handler: 'onChange'
    }
  }
}
</script>