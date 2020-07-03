<template>
  <client-only>
    <div>
      <flickity ref="flickity" :options="mergedOptions" v-if="reinit">
        <slot />
      </flickity>
    </div>
  </client-only>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  name: 'UHVertilcalSlider',
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: true,
        freeScroll: true
      },
      reinit: true
    }
  },
  methods: {
    reInitSlider() {
      // ¯\_(ツ)_/¯
      this.$nextTick(() => {
        this.reinit = false
        this.$nextTick(() => {
          this.reinit = true
        })
      })
    }
  },
  computed: {
    mergedOptions() {
      if (isEmpty(this.options)) {
        return this.flickityOptions
      }
      return this.options
    }
  }
}
</script>
