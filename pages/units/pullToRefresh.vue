<template>
  <div>
    <header class="px-4 pt-8 text-white bg-gray-800">
      <h3 class="font-semibold tracking-wider text-gray-400 uppercase text-md">
        {{ $t('pages.pullToRefresh.label') }}
      </h3>
    </header>
    <main>
      <div class="relative z-0 h-full pt-6 mb-10">
        <div class="absolute inset-0 bg-gray-800 h-1/6 -z-10"></div>
        <UHNewsCard/>
        <UHTimerButton :text="$t('general.button.skipButtonText')" />
      </div>
    </main>
  </div>
</template>

<script>
import UHNewsCard from '@/components/generics/UHNewsCard'
import UHTimerButton from '@/components/generics/UHTimerButton'

export default {
  name: 'pullToRefresh',
  layout: 'clear',
  data() {
    return {
      enabled: false,
    }
  },
  created() {
    setTimeout(() => (this.enabled = true), 10000)
  },
  mounted() {
      setTimeout(() => {
        this.timeout = 'Button'
      }, 3000)
  },
  components: {
    UHNewsCard,
    UHTimerButton
  }
}
</script>
