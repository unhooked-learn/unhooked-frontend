<template>
  <button
    @click.prevent="emitSelected(text)"
    class="inline-block w-20 px-2 py-1 mx-2 my-1 font-semibold text-blue-800 bg-blue-200 rounded-md min-w-min-content hover:text-blue-200 hover:bg-blue-800"
  >
    <span class="inline-block h-5 tracking-wide text-center">{{text}}</span>
  </button>
</template>

<script>
export default {
  name: 'UHFtbSelectedItem',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    emitSelected(item) {
      this.$emit('selected', item)
    }
  }
}
</script>
