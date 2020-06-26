<template>
  <nuxt-link :to="to">
    <div class="w-full rounded shadow-lg h-36">
      <div
        class="min-w-full min-h-full my-2 overflow-hidden text-gray-800 bg-white rounded-md shadow-md"
      >
        <div class="object-cover aspect aspect-1/2">
          <img class="object-cover" :src="card.mediaName" />
        </div>
        <div class="p-4 leading-none">
          <h4 class="text-md">
            {{ card.title }}
          </h4>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'UHKnowledgebaseCard',
  props: {
    to: {
      type: String,
      required: false,
      default: '#'
    },
    card: {
      type: Object,
      required: false,
      default: () => ({ mediaName: '#', title: 'foo' })
    }
  }
}
</script>
