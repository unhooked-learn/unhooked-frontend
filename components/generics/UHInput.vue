<template>
  <div class="relative mt-1 rounded-md shadow-sm">
    <div v-if="$scopedSlots.prepent" class="absolute inset-y-0 left-0 z-10 flex items-center justify-between pl-3 pointer-events-none">
      <slot name="prepent"/>
    </div>
    <input :class="{'pl-8':$scopedSlots.prepent}" :aria-label="placeholder" :name="label" :type="type" :value="value" @input="inputChange" required class="relative z-0 w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" :placeholder="placeholder" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UHInput',
  props: {
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true,
      default: 'Title'
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: String,
      required: false
    }
  },
  methods: {
    inputChange(event){
      this.$emit('input', event.target.value);
      console.log(event.target.value);
    } 
  }
}
</script>
