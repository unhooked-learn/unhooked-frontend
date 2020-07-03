<template>
  <div>
    <div class="sr-only">{{$t('pages.quiz.steps',{current, total})}}</div>
    <div class="flex justify-between mt-4 space-x-4">
      <div
        v-for="(n, idx) in total"
        :key="key(idx)"
        
        @click="setCurrent(idx)"

        class="w-full h-2"
        :class="{ 'bg-gray-500' : n > current, 'bg-white' : n <= current  }"
      >
      <span class="sr-only"> got to quiz {{idx + 1 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UHQuizProgress',

  computed: {
    ...mapGetters({
      total: 'quiz/total',
      current: 'quiz/current'
    })
  },
  methods: {
    key (idx) {
      return `key${idx}-${this.current}`
    },
    setCurrent(idx) {
        this.$emit('goToQuestion' , idx + 1)
    },
  },
}
</script>