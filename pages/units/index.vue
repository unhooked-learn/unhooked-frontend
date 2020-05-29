<template>
  <div class="flex flex-col justify-between h-screen">
    <header class="flex flex-col justify-between h-full text-white bg-gray-800">
      <div class="px-4 py-8">
        <h2 class="font-semibold"> {{ $t('pages.course.welcome') }} {{user.name}}!</h2>
        <p class="px-1 py-2"> {{ $t('pages.course.intro') }}</p>
      </div>

      <div class="px-4">
        <h3
          class="font-semibold tracking-wider text-gray-400 uppercase text-md "
        >
           {{ $t('pages.course.label') }}
        </h3>
      </div>
    </header>
    <main class="mb-16">
    <div class="relative pt-2 mb-10">
      <div class="absolute inset-0 bg-gray-800 h-2/3"></div>
      <client-only>
        <flickity ref="flickity" :options="flickityOptions">
          <UHUnitCard
            class="mx-2"
            :unit="unit"
            :active="unit.active"
            :complete="unit.complete"
            :key="idx"
            v-for="(unit, idx) in units"
          />
        </flickity>
      </client-only>
    </div>
    </main>
  </div>
</template>

<script>
import UHUnitCard from '@/components/units/UHUnitCard'

import { mapGetters } from 'vuex'

export default {
  name: 'units',
  components: {
    UHUnitCard
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: true,
        freeScroll: true
      }
    }
  },
  computed: {
    ...mapGetters({
      units: 'units/units',
      user: 'profile/user'
    })
  }
}
</script>
