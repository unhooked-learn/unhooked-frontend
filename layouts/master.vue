<template>
  <div class="h-screen font-sans text-base antialiased bg-gray-100">
    <div class="relative max-w-5xl mx-auto">
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
import achivements from '@/mixins/achivements'

export default {
  name: 'LayoutMaster',
  mixins: [achivements],
  components: {
    UHBadgeModal,
    UHUnitModal,
  }
}
</script>
