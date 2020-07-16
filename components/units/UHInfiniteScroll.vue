<template>
  <div>
    <!-- component -->
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="grid grid-cols-1 gap-6 px-4 my-6 md:px-6 lg:px-8"
    >
      <slot name="item" :item="item" />
    </div>

    <div v-if="items.length" v-observe-visibility="handleScrolledToBottom"></div>
  </div>
</template>

<script>
export default {
  name: 'UHInfiniteScroll',
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      page: 1
    }
  },
  methods: {
    handleScrolledToBottom(isVisible) {
      if (!isVisible) {
        return
      }
      this.page++
      this.$emit('refetch', this.page)
    }
  }
}
</script>
