<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <div class="absolute top-0 left-0">
        <UHAccessibilityButton to="profile">
          <font-awesome-icon icon="chevron-left" class="w-5 p-1 md:p-0 fa-2x" />
        </UHAccessibilityButton>
      </div>

      <UHUserSettings />

      <hr class="border-2 rounded-lg" />

      <UHLanguageSettings />

      <hr class="border-2 rounded-lg" />

      <UHProfileSettings />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'
import UHButton from '@/components/generics/UHButton'

import UHUserSettings from '@/components/profile/UHUserSettings'
import UHLanguageSettings from '@/components/profile/UHLanguageSettings'
import UHProfileSettings from '@/components/profile/UHProfileSettings'

export default {
  name: 'settings',
  fetchOnServer: false,
  fetchDelay: 1000,
  components: {
    UHButton,
    UHAccessibilityButton,
    UHLanguageSettings,
    UHUserSettings,
    UHProfileSettings
  },
  async fetch() {
    await this.$store.dispatch('profile/fetch')
  }
}
</script>
