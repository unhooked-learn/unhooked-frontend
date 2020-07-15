<template>
  <div class="h-screen font-sans text-base antialiased bg-gray-100">
    <div class="relative max-w-5xl mx-auto">
      <slot name="prepent">
        <client-only>
          <template>
            <UHDesktopWarning/>
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
import UHDesktopWarning from '@/components/layout/UHDesktopWarning'
import achievements from '@/mixins/achievements'

export default {
  name: 'LayoutMaster',
  mixins: [achievements],
  components: {
    UHBadgeModal,
    UHUnitModal,
    UHDesktopWarning
  }
}
</script>
