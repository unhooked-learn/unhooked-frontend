<template>
  <div class="h-screen font-sans antialiased bg-gray-50">
    <div class="relative max-w-md mx-auto">
      <slot name="prepent">
        <client-only>
          <template>
            <UHBadgeModal />
            <UHUnitModal />
          </template>
        </client-only>
      </slot>
      <nuxt />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import UHBadgeModal from '@/components/generics/UHBadgeModal'
import UHUnitModal from '@/components/generics/UHUnitModal'

export default {
  components: {
    UHBadgeModal,
    UHUnitModal
  }
}
</script>
