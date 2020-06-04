<template>
  <div class="flex-shrink-0 w-full h-48 rounded shadow-lg">
    <div
      class="min-w-full min-h-full my-2 overflow-hidden text-gray-800 bg-white rounded-md shadow-md"
    >
      <div class="object-cover aspect aspect-1/2 loading-state"></div>
      <div class="p-4">
        <div
          class="flex h-3 mb-1 rounded loading-state"
          :class="{ 'w-24': idx == lines - 1 }"
          :key="idx"
          v-for="(n, idx) in lines"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UHKnowledgebaseCardLoadingState',
  props: {
    lines: {
      default: 3,
      type: Number
    }
  },
  computed: {}
}
</script>
