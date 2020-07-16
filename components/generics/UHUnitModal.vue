<template>
  <UHModal name="unit-modal" ref="modal" @beforeClose="clearSelectedUnit">
    <template #heroImage>
      <div class="py-16">
        <div class="absolute inset-0 bg-red-400">
          <div class="relative pb-2/3">
            <img
              class="absolute object-cover w-full h-full "
              :src="unit.mediaName"
            />
          </div>
        </div>
      </div>
    </template>

    <template #body>
      <div class="px-4 mt-2">
        <h1 class="py-2 font-semibold uppercase">
          #{{ unit.orderId }} {{ unit.name }}
          <span
            class="ml-3 text-sm text-green-500 text-semibold"
            v-if="unit.complete"
          >
            &check;
          </span>
        </h1>
        <p class="text-sm">
          {{ unit.description }}
        </p>
      </div>
    </template>

    <template #footer="{close}">
      <div class="flex justify-between">
        <UHButton @click="goToUnit" class="text-white bg-gray-800 hover:bg-gray-700">       
            <span>{{ $t('pages.course.unit.modal.start') }}</span> 
        </UHButton>
        <UHButton secondary @click="close()">
          {{ $t('general.modal.close') }}
        </UHButton>
      </div>
    </template>
  </UHModal>
</template>

<script>
import UHModal from './UHModal.vue'
import UHButton from './UHButton.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UHUnitModal',
  components: {
    UHModal,
    UHButton
  },
  computed: {
    ...mapGetters({
      unit: 'units/unit'
    })
  },
  methods: {
    ...mapActions({
      clearSelectedUnit: 'units/clearUnit'
    }),
    goToUnit() {
      // navigate to the slides
       this.$router.push(
          this.localePath({
            name: 'units-unit-slide-slide',
            params: { unit: this.unit.orderId, slide: 1 }
          })
        )
    },
  },
  watch: {
    unit: {
      handler(newValue) {
        this.$refs.modal.open()
      }
    }
  }
}
</script>
