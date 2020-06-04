<template>
  <div
    class="flex items-center justify-center px-4 py-8 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md">
      <div
        class="absolute top-0 right-0 object-cover min-w-full aspect aspect-1/2"
      >
        <img
          :src="movie.Poster"
          class="object-cover overflow-hidden rounded-b-md max-h-40"
        />
      </div>

      <div class="absolute top-0 left-0 text-white">
        <nuxt-link :to="localePath('knowledge')">
          <font-awesome-icon icon="chevron-left" class="m-5" />
        </nuxt-link>
      </div>
      <div>
        <h2
          class="text-2xl font-extrabold leading-9 text-center text-gray-900 mt-36"
        >
          {{ movie.Title }}
        </h2>
      </div>
      <div class="mt-4 mb-4 text-gray-900">
        {{ movie.Plot }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clear',
  async asyncData({ params, $axios }) {
    const data = await $axios.$get(
      `http://www.omdbapi.com/?i=${params.chapter}&apikey=466f9280&plot=full`
    )
    return { movie: data }
  }
}
</script>
