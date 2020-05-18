<template>
  <div class="h-screen font-sans antialiased bg-gray-50">
    <div class="relative max-w-md mx-auto">
      <nuxt />
      <UHNavigation />
      <client-only>
        <UHModal />
      </client-only>
    </div>
  </div>
</template>

<script>
import UHNavigation from '@/components/layout/UHNavigation'
import UHModal from '@/components/generics/UHModal'

export default {
  components: {
    UHNavigation,
    UHModal
  }
}
</script>
