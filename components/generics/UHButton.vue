<template>
  <button
    :disabled="disabled"
    class="relative flex justify-center px-4 py-2 font-medium leading-5 transition duration-150 ease-in-out border rounded-md group text-md focus:outline-none"
    :class="classNames"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UHButton',
  props: {
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classNames() {
      return {
        'text-grey-800 bg-grey-600 hover:bg-gray-500 focus:border-gray-900 focus:shadow-outline-grey active:bg-grey-700': !this
          .secondary,
        'text-grey-900 bg-white hover:bg-gray-200 border-gray-300 focus:border-gray-900 focus:shadow-outline-grey active:bg-grey-700 active:text-white': this
          .secondary
      }
    }
  }
}
</script>
