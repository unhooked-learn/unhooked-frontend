<template>
  <div class="p-3 text-red-800 bg-red-100 rounded-md" v-if="!isEmpty(autherrors)">
    <font-awesome-icon icon="exclamation-triangle" class="w-20 m-auto mr-3 fa-1x" />
    {{ autherrors.message }}
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  name: 'UHAuthError',
  props: {
    autherrors: {
      types: Object,
      default: () => ({})
    }
  },
  methods: {
      isEmpty
  }
}
</script>