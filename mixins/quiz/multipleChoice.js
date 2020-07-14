import { sluggify } from '~/helpers/misc'

const itemState = {
  ANSWER_IS_SELECTED: 'ANSWER_IS_SELECTED',
  ANSWER_IS_CORRECT: 'ANSWER_IS_CORRECT',
  ANSWER_IS_WRONG: 'ANSWER_IS_WRONG',
  ANSWER_IS_CORRECT_AND_SELECTED: 'ANSWER_IS_CORRECT_AND_SELECTED',
  ANSWER_IS_WRONG_AND_SELECTED: 'ANSWER_IS_WRONG_AND_SELECTED'
}

export default {
  data() {
    return {
      itemState
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    check: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLabelForName() {
      return sluggify(this.item.answerText)
    },

    checkTextColor() {
      if (this.check) {
        return {
          'text-white': true
        }
      }

      return {
        'text-blue-500': this.getButtonState() === itemState.ANSWER_IS_SELECTED,
        'text-green-500': this.getButtonState() === itemState.ANSWER_IS_CORRECT,
        'text-red-500': this.getButtonState() === itemState.ANSWER_IS_WRONG
      }
    },
    checkBorderColor() {
      return {
        'border-blue-500':
          this.getButtonState() === itemState.ANSWER_IS_SELECTED,
        'border-green-500':
          this.getButtonState() === itemState.ANSWER_IS_CORRECT,
        'border-red-500': this.getButtonState() === itemState.ANSWER_IS_WRONG,
        'border-green-500 bg-green-500 text-white font-semibold':
          this.getButtonState() === itemState.ANSWER_IS_CORRECT &&
          this.isCurrent,
        'border-red-500 bg-red-500 text-white font-semibold':
          this.getButtonState() === itemState.ANSWER_IS_WRONG && this.isCurrent
      }
    },

    icon() {
      if (this.getButtonState() === itemState.ANSWER_IS_CORRECT) {
        return 'check'
      }
      if (this.getButtonState() === itemState.ANSWER_IS_WRONG) {
        return 'times'
      }

      return 'question'
    },
    checkAnswer() {
      return {
        'border-blue-500':
          this.getButtonState() === itemState.ANSWER_IS_SELECTED,
        'border-green-500':
          this.getButtonState() === itemState.ANSWER_IS_CORRECT,
        'border-red-500': this.getButtonState() === itemState.ANSWER_IS_WRONG
      }
    }
  },
  methods: {
    getButtonState() {
      if (this.isCurrent && !this.check) {
        return itemState.ANSWER_IS_SELECTED
      }

      if (this.item.correct && this.check) {
        return itemState.ANSWER_IS_CORRECT
      }
      if (!this.item.correct && this.check) {
        return itemState.ANSWER_IS_WRONG
      }

      if (this.check && this.isCurrent && this.item.correct) {
        return itemState.ANSWER_IS_CORRECT_AND_SELECTED
      }
      if (this.check && this.isCurrent && !this.item.correct) {
        return itemState.ANSWER_IS_WRONG_AND_SELECTED
      }
    }
  }
}
