<template>
  <div
    class="flex flex-col justify-center my-5 bg-white border border-red-500 rounded" v-if="!isEmpty(autherrors)"
  >
    <div class="flex w-full h-full">
      <div class="flex items-center justify-center w-1/5 bg-red-500">
        <font-awesome-icon
          icon="exclamation-triangle"
          class="w-12 p-1 text-white md:p-0 fa-3x"
        />
      </div>
      <div class="flex items-center justify-center w-4/5 ">
        <p class="m-2 text-gray-900 text-md">
          {{ autherrors.message }}
        </p>
      </div>
    </div>
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
