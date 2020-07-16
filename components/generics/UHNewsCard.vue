<template>
  <div>
    <div
      class="m-3 mt-5 mb-5 overflow-hidden bg-white border-b-4 border-blue-500 rounded-md shadow-xl"
    >
      <img
        v-if="item.urlToImage"
        @error="errorSrc(error)"
        :src="item.urlToImage"
        class="object-cover w-full h-32 sm:h-48 md:h-64"
      />
      <div class="p-4 md:p-6">
        <p class="mb-1 text-xs font-semibold leading-none text-blue-500">{{ item.author }}</p>
        <h3 class="mb-2 text-xl font-semibold leading-tight sm:leading-normal">{{ item.title }}</h3>
        <div class="flex items-center text-sm">
          <p class="leading-tight" v-html="item.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UHNewsCard',
  
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    errorSrc(error) {
      console.log(error)
    }
  }
}
</script>
