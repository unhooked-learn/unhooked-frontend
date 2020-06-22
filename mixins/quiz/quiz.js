export default {
  data() {
    return {
      quiz: {
        check: false,
        item: {}
      },
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
        this.quiz.check = check
        this.$emit('check', check);
        this.$emit('selectedAnswer', this.quiz.item); 
      },
      emitSelectedAnswers() {
          this.$emit('selected', [])
      },
  },
}
