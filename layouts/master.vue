<template>
  <div class="h-screen font-sans antialiased bg-gray-50">
    <div class="relative max-w-md mx-auto">
      <slot name="prepent">
        <client-only>
          <UHModal />
        </client-only>
      </slot>
      <nuxt />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import UHModal from '@/components/generics/UHModal'

export default {
  components: {
    UHModal
  }
}
</script>
