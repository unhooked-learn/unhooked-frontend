<template>
  <div class="relative" :style="styleHeight">
    <div class="absolute flex w-full overflow-hidden">
      <template v-for="n in count">
        <slot />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UHVertilcalSlider',
  props: {
    /**
     * the amount of the mocked items 
     */
    count: {
      type: Number,
      default: 1
    },
    elementHeight: {
      type: Number,
      default: 300
    }
  },
  computed: {
    styleHeight() {
      return `height: ${this.elementHeight}px;`
    }
  }
}
</script>
