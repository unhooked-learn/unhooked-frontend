<template>
  <div class="flex-shrink-0 w-full mt-6 rounded shadow-lg h-36">
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
  // determinates how many loading lines should be shown  
    lines: {
      default: 3,
      type: Number
    }
  },
}
</script>
