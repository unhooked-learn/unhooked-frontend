<template>
  <modal
    :name="name"
    width="90%"
    height="70%"
    class="overflow-hidden rounded-lg"
    @before-close="beforeClose"
  >
    <div class="relative flex flex-col h-full">
      <header class="pb-4 overflow-hidden rounded-tl-lg rounded-tr-lg">
        <div class="relative flex flex-col justify-end text-gray-200 bg-gray-600">
          <div class="flex self-end">
            <UHAccessibilityButton @click="close" class="z-10">
              <font-awesome-icon
                icon="times"
                class="text-white opacity-75 hover:opacity-100 fa-lg"
              />
            </UHAccessibilityButton>
            <slot name="heroImage" />
          </div>
          <div class="flex justify-center" :class="headingClasses" v-if="$scopedSlots.cardHeading">
            <h3 class="z-30 text-xl font-semibold leading-tight uppercase">
              <slot name="cardHeading" />
            </h3>
          </div>
        </div>
        <slot name="header" />
      </header>

      <main class="flex-grow">
        <slot name="body" />
      </main>

      <footer class="p-4 pb-6">
        <slot name="footer" :close="close"></slot>
      </footer>
    </div>
  </modal>
</template>

<script>
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'

export default {
  name: 'UHModal',
  components: {
    UHAccessibilityButton
  },

  props: {
    name: {
      type: String,
      required: false,
      default: 'modal'
    },
    headingClasses: {
      type: String,
      required: false,
      default: 'pb-5'
    }
  },

  methods: {
    open() {
      // trigger modal
      this.$modal.show(this.name)
    },
    close() {
      // close modal
      this.$modal.hide(this.name)
    },
    beforeClose() {
      // emit event before modal is closed
      this.$emit('beforeClose')
    }
  }
}
</script>

<style>
.vm--modal {
  @apply rounded-lg !important;
}
</style>
