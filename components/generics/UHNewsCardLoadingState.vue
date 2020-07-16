<template>
  <div class="m-3 mt-5 mb-5 overflow-hidden bg-white border-b-4 border-gray-500">
    <div
      class="min-w-full min-h-full overflow-hidden text-gray-800 bg-white rounded-md shadow-md"
    >
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
  name: 'UHNewsCardLoadingState',
  props: {
    lines: {
      default: 8,
      type: Number
    }
  }
}
</script>
