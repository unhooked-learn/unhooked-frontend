
<script>
export default {
  layout: 'clear',

  render(h) {
    return h('div', '');
  },
  created() {
    this.$router.push(
      this.localePath({
          name: 'units-unit-quiz-quiz',
          params: { unit: this.getUnitParams, quiz: 1 }
        })
    )
  },

  computed: {
    getUnitParams() {
      return this.$route.params.unit
    }
  }
}
</script>
