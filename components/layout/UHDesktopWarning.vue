<template>
  <div class="absolute z-10 w-full" v-if="$device.isDesktop&&!seen">
    <div
      class="p-4 m-3 mt-6 text-center text-orange-800 bg-orange-200 border-2 border-orange-500"
      role="alert"
    >
      <p class="font-bold">{{ $t('general.desktop.label') }}</p>
      <p>{{ $t('general.desktop.text') }}</p>
      <div class="flex justify-center mt-2">
        <UHButton
          @click="seen = true"
          class="text-white bg-gray-800"
        >{{ $t('general.desktop.button') }}</UHButton>
      </div>
    </div>
  </div>
</template>

<script>
import UHButton from '@/components/generics/UHButton'

export default {
  name: 'UHDesktopWarning',
  components: {
    UHButton
  },
  data() {
    return {
      seen: false
    }
  }
}
</script>
