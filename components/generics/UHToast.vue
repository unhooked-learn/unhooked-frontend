<template>
  <a href="#" @click.prevent="showToast()">{{ text }}</a>
</template>

<script>
export default {
  name: 'UHToast',
  props: {
    text: {
      type: [String, Number],
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'bubble'
    },
    position: {
      type: String,
      required: false,
      default: 'bottom-center'
    },
    duration: {
      type: Number,
      required: false,
      default: 5000
    }
  },

  methods: {
    showToast() {
      this.$toasted.show(this.text, {
        theme: this.theme,
        position: this.position,
        duration: this.duration
      })
    }
  }
}
</script>
