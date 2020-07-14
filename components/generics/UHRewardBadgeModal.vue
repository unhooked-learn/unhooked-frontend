<template>
  <UHModal name="badge-modal" ref="modal" @beforeClose="nextRewardedBadges">
    <template #cardHeading>Congratulations!</template>

    <template #header>
      <div class="relative z-0" v-if="rewardedBadge">
        <div class="absolute inset-0 bg-gray-600 rounded-b-lg h-3/5 -z-10"></div>

        <div class="flex w-32 h-32 m-auto text-center bg-gray-200 rounded-full shadow-lg">
          <font-awesome-icon
            v-if="rewardedBadge.iconName"
            :icon="rewardedBadge.iconName"
            class="w-20 m-auto text-gray-800 fa-5x"
          />
        </div>
      </div>
    </template>

    <template #body>
      <div class="px-4 mt-2" v-if="rewardedBadge && rewardedBadge.name">
        <h1 class="py-2 font-semibold uppercase">{{ rewardedBadge.name }}</h1>
        <p class="text-sm">{{ rewardedBadge.description }}</p>
      </div>
    </template>

    <template #footer="{close}">
      <div class="flex justify-center">
        <UHButton @click="close()">{{ $t('general.modal.close') }}</UHButton>
      </div>
    </template>
  </UHModal>
</template>

<script>
import UHModal from './UHModal.vue'
import UHButton from './UHButton.vue'
import { isEmpty } from 'lodash'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UHRewardBadgeModal',
  components: {
    UHModal,
    UHButton
  },
  computed: {
    ...mapGetters({
      rewardedBadge: 'badge/rewardedBadge',
      hasBadgesToReward: 'badge/hasBadgesToReward'
    })
  },
  methods: {
    ...mapActions({
      nextRewardedBadges: 'badge/nextRewardedBadges'
    })
  },
  watch: {
    rewardedBadge: {
      handler(value) {
        this.$nextTick(() => {
          if (!isEmpty(value)) {
            setTimeout(() => {
              this.$refs.modal.open()
            }, 2000)
          }
        })
      },
      immediate: true,
    }
  }
}
</script>
