<template>
  <label
    class="flex items-center justify-between px-5 py-3 bg-white border-2 rounded-md shadow-md"
    :class="checkBorderColor"
    :for="getLabelForName"
  >
    <div>
      <input
        type="radio"
        class="hidden"
        name="scq"
        :id="getLabelForName"
        :value="item.answerText"
        @input="onInput"
        :disabled="check"
      />
      <span class>{{item.answerText}}</span>
    </div>

    <template>
      <font-awesome-icon :icon="icon" :class="checkTextColor" v-if="isCurrent" />
    </template>
  </label>
</template>

<script>
import { eq } from 'lodash'
import multipleChoice from '@/mixins/quiz/multipleChoice'

export default {
  name: 'UHInputChoiceSingle',
  mixins: [multipleChoice],
  props: {
    value: {
      type: [Object],
      required: true
    },
  },
  computed: {
    isCurrent() {
      return eq(this.item, this.value)
    },
  },
  methods: {
    onInput(event) {
      // this.$emit('input', this.item)
      this.$emit('input', this.item)
    },

  }
}
</script>