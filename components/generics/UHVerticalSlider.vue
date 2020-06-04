<template>
  <client-only>
    <flickity ref="flickity" :options="flickityOptions">
      <slot />
    </flickity>
  </client-only>
</template>

<script>
export default {
  name: 'UHVertilcalSlider',
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: true,
        freeScroll: true
      }
    }
  }
}
</script>
