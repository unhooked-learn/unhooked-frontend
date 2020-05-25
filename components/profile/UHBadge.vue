<template>
  <div class="flex justify-center">
    <button
      @click="showEarnedBadges(badge)"
      class="rounded-full focus:outline-none focus:shadow-outline-teal"
      :class="{ 'cursor-default': !badge.active }"
    >
      <div
        class="flex w-16 h-16 text-center bg-gray-800 rounded-full"
        :class="{ 'shadow-md': badge.active, 'opacity-25': !badge.active }"
      >
        <font-awesome-icon
          :icon="badge.icon"
          class="m-auto text-gray-100 fa-2x"
        />
      </div>
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'UHBadge',
  props: {
    badge: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      selectBadge: 'badge/selectBadge'
    }),
    showEarnedBadges() {
      if (this.badge.active) {
        this.selectBadge(this.badge)
      }
    }
  }
}
</script>
