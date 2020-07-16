<template>
  <div>
    <nuxt-link v-if="to" :to="localePath(to)" class="flex flex-col items-center justify-center w-12 h-12 pt-2 md:w-18 md:h-18 focus:outline-none focus:shadow-outline-gray"
      :class="{ 'bg-red-100 text-gray-800': accesibility }"
    >
      <slot />
    </nuxt-link>
    <button v-else
      @click="$emit('click')"
      class="flex items-center justify-center w-12 h-12 md:w-18 md:h-18 focus:outline-none focus:shadow-outline-gray"
      :class="{ 'bg-red-100 text-gray-800': accesibility }"
    >
      <slot />
    </button>
  </div>

</template>

<script>
export default {
  name: 'UHAccesibilityButton',
  props: {
    /**
     * helper to show the click area of the button
     */
    accesibility: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * the target of the button
     */
    to: {
      type: [String, Object],
      required: false,
      default: ''
    }
  }
}
</script>
