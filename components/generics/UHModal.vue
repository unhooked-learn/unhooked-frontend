<template>
  <div>
    <modal :name="name" width="90%">
      {{ selectedBadge }}
    </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UHModal',
  props: {
    name: {
      tvpe: String,
      required: false,
      default: 'modal'
    }
  },
  computed: {
    ...mapGetters({
      selectedBadge: 'selectedBadge'
    })
  },
  methods: {
    open() {
      this.$modal.show(this.name)
    },
    close() {
      this.$modal.hide(this.name)
    }
  },
  watch: {
    selectedBadge: {
      handler(newValue) {
        this.open()
      }
    }
  }
}
</script>
