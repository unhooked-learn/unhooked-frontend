<template>
  <client-only>
    <flickity ref="flickity" :options="mergedOptions">
      <slot />
    </flickity>
  </client-only>
</template>

<script>

import { isEmpty } from "lodash"

export default {
  name: 'UHVertilcalSlider',
  props: {
    options: {
      type: Object,
      default: () => ({
      })
    }
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: true,
        freeScroll: true
      }
    }
  },
  computed: {
    mergedOptions() {
      if(isEmpty(this.options)){
        return this.flickityOptions
      }
      return this.options
    }
  }
}
</script>
