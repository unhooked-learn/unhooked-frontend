<template>
    <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div class="w-full max-w-md">
            <div class="absolute top-5 left-5 ">
                <nuxt-link :to="localePath('knowledge')"><font-awesome-icon icon="chevron-left"/></nuxt-link>
            </div>  
            <div>
            <div class="object-cover aspect aspect-1/2">
                <img :src="movie.Poster" class="object-cover min-w-full mt-4 overflow-hidden rounded-md max-h-40" >
            </div>  
            <h2 class="mt-4 text-2xl font-extrabold leading-9 text-center text-gray-900">
                {{ movie.Title }}
            </h2>
            </div>
            <h3 class="mt-4 mb-4 ml-1 text-lg font-medium text-gray-900" >
                {{ movie.Plot }}
            </h3>  
        </div>
    </div>   
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const data = await $axios.$get(`http://www.omdbapi.com/?i=${params.chapter}&apikey=466f9280&plot=full`)
    return { movie: data }
  }
}
</script>
