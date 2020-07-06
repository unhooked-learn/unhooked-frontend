<template>
  <div class="flex flex-col justify-between h-screen">
    <header class="flex flex-col justify-between h-full text-white bg-gray-800">
      <Logo
        class="hidden w-auto pl-10 pr-10 m-16 mx-auto bg-gray-100 rounded-full md:block shadow-solid"
      />
      <div class="px-4 pt-4 md:p-12">
        <h2 class="font-semibold">
          {{ $t('pages.course.welcome') }} {{ user.username }}!
        </h2>
        <p class="py-2">{{ $t('pages.course.intro') }}</p>
      </div>

      <div class="px-4">
        <h3
          class="font-semibold tracking-wider text-gray-400 uppercase text-md md:ml-8"
        >
          {{ $t('pages.course.label') }}
        </h3>
      </div>
    </header>
    <main class="mb-16">
      <div class="relative pt-2 mb-10">
        <div class="absolute inset-0 bg-gray-800 h-2/3"></div>
        <UHMockLoadingState :count="3" v-if="$fetchState.pending">
          <UHUnitCardLoadingState class="mx-2 " :elementHeight="380" />
        </UHMockLoadingState>

        <UHVerticalSlider v-else>
          <UHUnitCard
            class="mx-2"
            :unit="unit"
            :active="isNewUnit(unit)"
            :complete="!isNewUnit(unit)"
            :key="idx"
            v-for="(unit, idx) in unlockedUnits"
          />
        </UHVerticalSlider>
      </div>
    </main>
  </div>
</template>

<script>
import UHUnitCard from '@/components/units/UHUnitCard'
import UHUnitCardLoadingState from '@/components/units/UHUnitCardLoadingState'
import UHVerticalSlider from '@/components/generics/UHVerticalSlider'
import UHMockLoadingState from '@/components/generics/UHMockLoadingState'
import Logo from '@/components/Logo'

import { mapGetters } from 'vuex'

export default {
  name: 'units',
  //fetchOnServer: false,
  fetchDelay: 1000,
  components: {
    UHUnitCard,
    UHUnitCardLoadingState,
    UHVerticalSlider,
    UHMockLoadingState,
    Logo
  },

  computed: {
    ...mapGetters({
      units: 'units/units',
      user: 'profile/user'
    }),
    unlockedUnits() {
      return this.units.filter(item => item.unlocked)
    },
    currentUnit() {
      return this.unlockedUnits[this.unlockedUnits.length - 1]
    }
  },
  methods: {
    isNewUnit(unit) {
      if (this.currentUnit == undefined) {
        return false
      }
      return this.currentUnit.id === unit.id
    }
  },
  mounted() {
    // refactor
    this.$store.dispatch('profile/activeTime')
  },

  activated() {
    // Call fetch again if last fetch more than 5 minues ago
    if (this.$fetchState.timestamp <= Date.now() - 1000 * 60 * 5) {
      this.$fetch()
    }
  },
  async fetch() {
    await this.$store.dispatch('units/fetch')
  }
}
</script>
