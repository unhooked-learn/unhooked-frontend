<template>
  <UHModal name="badge-modal" ref="modal" @beforeClose="clearSelectedBadge">
    <template #cardHeading>
      Congratulations!
    </template>

    <template #header>
      <div class="relative z-0">
        <div
          class="absolute inset-0 bg-gray-600 rounded-b-lg h-3/5 -z-10"
        ></div>
        <!--
        <span v-if="selectedBadge.active" class="absolute top-0 left-0">
          <font-awesome-icon icon="check-circle" class="text-green-500 fa-3x" />
        </span>

        -->

        <div
          class="flex w-32 h-32 m-auto text-center bg-gray-200 rounded-full shadow-lg"
        >
          <font-awesome-icon
            :icon="selectedBadge.icon"
            class="m-auto text-gray-800 fa-5x"
          />
        </div>
      </div>
    </template>

    <template #body>
      <div class="px-4 mt-2">
        <h1 class="py-2 font-semibold uppercase">{{ selectedBadge.name }}</h1>
        <p class="text-sm">{{ selectedBadge.description }}</p>
      </div>
    </template>

    <template #footer="{close}">
      <div class="flex justify-center">
        <UHButton @click="close()">
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
  name: 'UHBadgeModal',
  components: {
    UHModal,
    UHButton
  },
  computed: {
    ...mapGetters({
      selectedBadge: 'badge/badge'
    })
  },
  methods: {
    ...mapActions({
      clearSelectedBadge: 'badge/clearBadge'
    })
  },
  watch: {
    selectedBadge: {
      handler(newValue) {
        if (!!newValue.description) {
          this.$refs.modal.open()
        }
      }
    }
  }
}
</script>
