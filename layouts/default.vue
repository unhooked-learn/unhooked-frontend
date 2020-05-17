<template>
  <div class="h-screen font-sans antialiased bg-gray-50">
    <nuxt />
    <UHNavigation />
  </div>
</template>

<script>
import UHNavigation from '@/components/layout/UHNavigation'

export default {
  components: {
    UHNavigation
  }
}
</script>
