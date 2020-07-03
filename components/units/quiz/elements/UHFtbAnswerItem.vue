<template>
  <button
    class="inline-block px-2 py-1 my-1 rounded-md"
    :class="styleClass"
    @click.prevent="remove(item)"
    :disabled="check"
  >
    <span
      class="inline-block h-5 font-semibold leading-5 tracking-wide text-center border-b-2 border-gray-500 border-dashed min-w-min-content"
      :class="{ 'w-20' : !item.answerText }"
    >
      {{item.answerText || '&nbsp;'}}
      <span class="ml-2"  v-if="check">
        <font-awesome-icon :icon="icon" />
      </span>
    </span>
  </button>
</template>

<script>
import { clone } from 'lodash';

export default {
  name: 'UHFtbAnswerItem',
  props: {
    item: {
      type: Object | undefined,
      default: () => ({})
    },
    check: {
      type: Boolean,
      default: true
    },
    position: {
      type: Number,
      default: 1
    }
  },
  methods: {
    remove(item) {
      this.$emit('remove', item)
    },
    isCorrect() {
      // temporarly fix for presentation !!!
      let tmp = clone(this.item.position);

      return this.position === (tmp+1)
    }
  },
  computed: {
    icon() {
      return this.isCorrect() ? 'check' : 'times'
    },
    styleClass() {
      return {
        'bg-gray-300 text-gray-800': !this.check,
        'bg-green-200 text-green-800': this.check && this.isCorrect(),
        'bg-red-200 text-red-800': this.check && !this.isCorrect()
      }
    }
  }
}
</script>
