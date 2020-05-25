<template>
  <button
    @click="$emit('click')"
    class="flex items-center justify-center w-12 h-12 focus:outline-none focus:shadow-outline-gray"
    :class="{ 'bg-red-100 text-gray-800': accesibility }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UHAccesibilityButton',
  props: {
    accesibility: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
