<template>
  <div class>
    <div class="flex w-1/5 h-5 rounded loading-state-dark"></div>
    <div class="py-4 space-y-2">
      <div
        class="flex h-5 rounded mb loading-state"
        v-for="(n, idx) in lines"
        :key="idx"
        :class="{ 'w-2/5': idx == lines - 1 }"
      ></div>
    </div>

    <div class="flex w-1/5 h-5 mt-3 rounded loading-state-dark"></div>
    <div class="flex w-2/5 h-5 mt-3 rounded loading-state"></div>
    <div class="py-4 space-y-3">
      <div
        class="flex items-center justify-between px-5 py-3 bg-white border-2 rounded-md shadow-md"
        v-for="(n, idx) in answers"
        :key="idx"
      >
        <div class="flex w-2/5 h-4 rounded mb loading-state"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UHQuizLoading',
  props: {
    answers: {
      default: 5,
      type: Number
    },
    lines: {
      default: 4,
      type: Number
    }
  }
}
</script>
