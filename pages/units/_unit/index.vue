<template>
  <div>
    <header class="p-4 pb-6 text-white bg-gray-800">
      <div>
        <h1 class="text-lg font-semibold uppercase"># {{ getUnitParams }} - Unit</h1>
        <UHQuizProgress />
      </div>
    </header>
    <main class="p-4">
      <component :is="questionType" :question="currentQuestion" />
    </main>
  </div>
</template>

<script>
import UHSingleChoice from '@/components/units/guiz/UHSingleChoice'
import UHQuizProgress from '@/components/units/guiz/elements/UHQuizProgress'

import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'clear',
  components: {
    UHSingleChoice,
    UHQuizProgress
  },
  data() {
    return {}
  },
  async fetch() {
    await this.$store.dispatch('quiz/fetch', this.getUnitParams)
  },
  mounted() {},

  computed: {
    ...mapGetters({
      currentQuestion: 'quiz/currentQuestion'
    }),
    questionType() {
      return `UH${this.currentQuestion.type}`
    },
    getUnitParams() {
      return this.$route.params.unit
    }
  }
}
</script>
