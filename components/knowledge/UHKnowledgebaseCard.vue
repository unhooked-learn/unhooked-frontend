<template>
  <nuxt-link :to="to">
    <div class="w-full h-48 rounded shadow-lg">
      <div
        class="min-w-full min-h-full my-2 overflow-hidden text-gray-800 bg-white rounded-md shadow-md"
      >
        <div class="object-cover aspect aspect-1/2">
          <img class="object-cover" :src="movie.Poster" />
        </div>
        <div class="p-4 leading-none">
          <h4 class="text-md">
            {{ movie.Title }}
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
      trype: String,
      required: false,
      default: '#'
    },
    movie: {
      type: Object,
      required: false,
      default: () => ({ Poster: '#', Title: 'foo' })
    }
  }
}
</script>
