<template>
  <UHModal name="unit-modal" ref="modal" @beforeClose="clearSelectedUnit">
    <template #heroImage>
      <div class="py-16">
        <div class="absolute inset-0 bg-red-400">
          <div class="relative pb-2/3">
            <img
              class="absolute object-cover w-full h-full "
              :src="unit.imgUrl"
            />
          </div>
        </div>
      </div>
    </template>

    <template #body>
      <div class="px-4 mt-2">
        <h1 class="py-2 font-semibold uppercase">
          #{{ unit.id }} {{ unit.name }}
          <span
            class="ml-3 text-sm text-green-500 text-semibold"
            v-if="unit.complete"
          >
            &check;
          </span>
        </h1>
        <p class="text-sm">
          {{ unit.excerpt }}
        </p>
      </div>
    </template>

    <template #footer="{close}">
      <div class="flex justify-between">
        <UHButton disabled>
          <span class="text-gray-500">Start Unit</span>
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
    })
  },
  watch: {
    unit: {
      handler(newValue) {
        //if (!!newValue.description) {
        this.$refs.modal.open()
        // }
      }
    }
  }
}
</script>
