<template>
  <div class="flex-shrink-0 w-64">
    <div
      class="min-w-full my-2 overflow-hidden text-white bg-white rounded-md shadow-md"
    >
      <div class="object-cover aspect aspect-1/2 loading-state"></div>
      <div class="p-4">
        <div class="flex w-20 h-3 mb-1 rounded loading-state"></div>
        <div class="flex h-5 mb-3 rounded loading-state"></div>

        <div
          class="flex h-3 mb-1 rounded loading-state"
          :class="{ 'w-36': idx == lines - 1 }"
          :key="idx"
          v-for="(n, idx) in lines"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UHUnitCardLoadingState',
  props: {
    lines: {
      type: Number,
      default: 4
    }
  }
}
</script>
