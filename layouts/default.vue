<template>
  <div class="h-screen font-sans antialiased bg-gray-50">
    <div class="max-w-md mx-auto relative">
      <nuxt />
      <UHNavigation />
      <UHModal />
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
