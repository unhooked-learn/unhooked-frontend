<template>
  <div @click="selectBadge(badge)">
    <div
      class="flex w-16 h-16 m-auto mb-6 text-center bg-gray-800 rounded-full"
      :class="{ 'shadow-md': badge.active, 'opacity-25': !badge.active }"
    >
      <font-awesome-icon
        :icon="badge.icon"
        class="m-auto text-gray-100 fa-2x"
      />
    </div>
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
      selectBadge: 'selectBadge'
    })
  }
}
</script>
