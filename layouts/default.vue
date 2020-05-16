<template>
  <div class="h-screen pt-16 font-sans antialiased bg-gray-50">
    <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-md shadow-md">
      <nuxt />
      <UHNavigation />
    </div>
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
