<template>
  <div class="">
    <div class="hidden p-4">
      <h2>Hi Jon Doe!</h2>
      <p>Let's learn something new</p>
    </div>

    <div>Units</div>

    <div class="hidden px-4">
      <h3 class="font-semibold tracking-wider text-gray-700 uppercase text-md ">
        Units
      </h3>
    </div>

    <div class="flex hidden space-x-2 overflow-x-scroll">
      <UHUnitCard
        :unit="unit"
        :active="unit.active"
        :complete="unit.complete"
        :key="idx"
        v-for="(unit, idx) in units"
      />
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
  computed: {
    ...mapGetters({
      units: 'units/units'
    })
  }
}
</script>
