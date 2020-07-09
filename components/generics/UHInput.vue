<template>
  <div class="relative mt-1 rounded-md shadow-sm">
    <div
      v-if="$scopedSlots.prepent"
      class="absolute inset-y-0 left-0 z-10 flex items-center justify-between pl-3 pointer-events-none"
      :class="{'text-red-800 ': hasError}"
    >
      <slot name="prepent" />
    </div>
    <input
      :class="{'pl-8':$scopedSlots.prepent,'pr-12': $scopedSlots.append, 'text-red-800 border-red-600  placeholder-red-500': hasError, 'text-gray-900 border-gray-300  placeholder-gray-500': !hasError }"
      :aria-label="placeholder"
      :name="label"
      :type="type"
      :value="value"
      @input="inputChange"
      required
      class="relative z-0 w-full px-3 py-2 border appearance-none form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      :placeholder="placeholder"
    />

    <div
      v-if="$scopedSlots.append"
      class="absolute inset-y-0 right-0 z-10 flex items-center justify-between"
      :class="{'text-red-800 ': hasError}"
    >
        <slot name="append"/>
    </div>
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
    },
    hasError: {
      type: Boolean,
      default: false
    },
    transformer: {
      type: Function,
      default: (a) => a
    }
  },
  methods: {
    inputChange(event) {
      console.log(this.transformer)
      
      this.$emit('input', this.transformer(event.target.value))
      // if (this.label == "username"){
      //   this.$emit('input', event.target.value.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, ''))  
      // } else {
      //   this.$emit('input', event.target.value)
      // }
    },
  }
}
</script>
