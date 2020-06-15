<template>
  <div class="flex justify-center">
    <button
      :aria-label="badge.name"
      @click="showEarnedBadges(badge)"
      class="rounded-full focus:outline-none focus:shadow-outline-teal"
      :class="{ 'cursor-default': !badge.active }"
    >
      <div
        class="flex w-16 h-16 text-center bg-gray-800 rounded-full md:w-24 md:h-24"
        :class="{ 'shadow-md': badge.active, 'opacity-25': !badge.active }"
      >
        <font-awesome-icon
          :icon="badge.iconName"
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
