<template>
  <label
    class="flex items-center justify-between px-5 py-3 bg-white border-2 rounded-md shadow-md"
    :class="checkBorderColor"
    :for="getLabelForName"
  >
    <div>
      <input
        type="checkbox"
        class="hidden"
        :name="item.answerText"
        :id="getLabelForName"
        :value="item.answerText"
        @change="onChange"
        :disabled="check"
      />
      <span class>{{item.answerText}}</span>
    </div>

    <template>
      <font-awesome-icon class="inline-block h-5" :icon="icon" :class="checkTextColor" v-if="isCurrent" />
    </template>
  </label>
</template>

<script>
import { eq } from 'lodash'
import { sluggify } from '@/helpers/misc'
import multipleChoice from '@/mixins/quiz/multipleChoice'

export default {
  name: 'UHInputChoiceMultiple',
  mixins: [multipleChoice],
  props: {
    item: {
      type: Object
    },
    value: {
      type: Array
    }
  },
  methods: {
    onChange(e) {
      // https://stackoverflow.com/questions/58187290/vue-binding-with-v-model-in-custom-checkbox-component-doesnt-work

      let currentValue = [...this.value]

      if (e.target.checked) {
        currentValue.push(this.item)
      } else {
        currentValue = currentValue.filter(item => item.answerText !== this.item.answerText)
      }

      this.$emit('input', currentValue)
    }
  },
  computed: {
    isCurrent() {
      return this.value.includes(this.item)
    }
  }
}
</script>