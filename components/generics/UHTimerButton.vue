<template>
  <client-only>
    <div class="fixed bottom-5 right-5">
      <UHButton v-show="enabled"
        class="w-auto px-3 py-3 text-white transition transform bg-gray-600 rounded-full shadow hover:scale-110 hover:bg-gray-700 active:shadow-lg mouse focus:outline-none"
      >
        <font-awesome-icon icon="forward" class="m-auto text-gray-100 fa-1x" />
        <span class="pl-2">{{text}}</span>
      </UHButton>
    </div>
  </client-only>
</template>

<script>
import UHButton from '@/components/generics/UHButton'
export default {
  name: 'UHTimerButton',
  components: {
    UHButton
  },
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },
    timer: {
      type: Number,
      required: false,
      default: 5      
    }
  },
  data () {
    return {
      enabled: false
    }
  },
  created() {
    setTimeout(() => (this.enabled = true), this.timer)
  }
}
</script>
