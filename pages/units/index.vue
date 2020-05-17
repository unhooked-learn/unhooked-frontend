<template>
  <div class="">
    <header class="text-white bg-gray-800">
      <div class="px-4 py-12">
        <h2>Hi Jon Doe!</h2>
        <p>Let's learn something new</p>
      </div>

      <div class="px-4">
        <h3
          class="font-semibold tracking-wider text-gray-400 uppercase text-md "
        >
          Units
        </h3>
      </div>
    </header>

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
      units: 'units/units'
    })
  }
}
</script>
