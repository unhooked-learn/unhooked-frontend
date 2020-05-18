<template>
  <nav class="fixed inset-x-0 bottom-0">
    <div class="px-4 py-3 bg-white shadow-2xl rounded-tl-md rounded-tr-md">
      <div class="flex justify-between">
        <UHNavButton
          :to="localePath('units')"
          :name="$t('general.navigation.units')"
          icon="graduation-cap"
        />
        <UHNavButton
          :to="localePath('knowledge')"
          :name="$t('general.navigation.knowledge_base')"
          icon="book"
        />
        <UHNavButton
          :to="localePath('profile')"
          :name="$t('general.navigation.profile')"
          icon="user"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import UHNavButton from './UHNavButton'

export default {
  name: 'UHNavigation',
  components: {
    UHNavButton
  }
}
</script>
