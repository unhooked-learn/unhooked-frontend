<template>
  <div>
    <header class="px-4 pt-12 text-white bg-gray-800">
      <h3 class="font-semibold tracking-wider text-gray-400 uppercase text-md">
        {{ $t('pages.infiniteScroll.label') }}
      </h3>
    </header>
    <main class="mb-16">
      <div class="relative z-0 h-full pt-8 mb-10">
        <div class="absolute inset-0 bg-gray-800 h-1/6 -z-10"></div>

        <!-- component -->
        <div :key="idx" v-for="(movie, idx) in movies" class="grid grid-cols-1 gap-6 px-4 my-6 md:px-6 lg:px-8">
            <div class="w-full max-w-xl px-4 py-4 mx-auto bg-white rounded-lg shadow-md">
            <div class="flex flex-row items-center justify-between py-2">
                <div class="flex flex-row items-center">
                <a href="#" class="flex flex-row items-center rounded-lg focus:outline-none focus:shadow-outline">
                    <img v-if="user.image" class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="">
                    <font-awesome-icon v-else class="text-cool-gray-800 fa-2x" icon="user-circle" />
                    <p class="ml-2 text-base font-medium">{{user.name}}</p>
                </a>
                </div>
            </div>
            <div class="mt-2">
                <div class="object-cover aspect aspect-1/2">
                    <img v-if="movie.Poster!='N/A'" class="object-cover w-full rounded-lg" :src="movie.Poster" />
                </div>
                <div class="flex flex-row items-center justify-end px-1 py-2">
                <button class="flex flex-row items-center rounded-lg focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    <span class="ml-1">{{Math.floor(Math.random() * Math.floor(10000))}}</span>
                </button>
                </div>
            </div>
            <div class="py-2">
                <p class="leading-snug">{{ movie.Title }}</p>
            </div>
            </div>
        </div>

        <div v-if="movies.length" v-observe-visibility="handleScrolledToBottom"></div>

        <!-- <div class="mx-2">
          <div class="flex flex-wrap -mx-2">
            <div class="w-full p-2" :key="idx" v-for="(movie, idx) in movies">
              <nuxt-link :to="localePath(`/knowledge/${movie.imdbID}`)">
                <div class="rounded shadow-lg">
                  <div
                    class="min-w-full min-h-full my-2 overflow-hidden text-white bg-gray-600 rounded-md shadow-md"
                  >
                    <div class="object-cover aspect aspect-1/2">
                      <img v-if="movie.Poster!='N/A'" class="object-cover" :src="movie.Poster" />
                    </div>
                    <div class="p-4 leading-none">
                      <h4 class="text-gray-100 text-md">
                        {{ movie.Title }}
                      </h4>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <div v-if="movies.length" v-observe-visibility="handleScrolledToBottom"></div>

          </div>
        </div> -->
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'infiniteScroll',  
  layout: 'clear',  
  data () {
    return {
      movies: [],
      page: 1,
      lastPage: 1      
    }
  },
  computed: {
    ...mapGetters({
      user: 'profile/user'
    })
  },
  methods: {
    async fetch() {
      let movies = await axios.get(
        `http://www.omdbapi.com/?s=Star%20Wars&page=${this.page}&apikey=466f9280`
      )
      this.movies.push(...movies.data.Search)
      this.lastPage = Math.floor(movies.data.totalResults/10)      
    },
    handleScrolledToBottom(isVisible){
      if(!isVisible) {return}
      if(this.page >= this.lastPage) {return}
      this.page++
      this.fetch()
    }
  },
  mounted () {
    this.fetch()
  },
  transition: {
    name: 'page',
    enterClass: 'opacity-0 scale-70',
    enterToClass: 'opacity-100 scale-100',
    enterActiveClass: 'transition-all transtion-1000 ease-in',
    leaveClass: 'opacity-100 scale-100',
    leaveToClass: 'opacity-0 scale-70',
    leaveActiveClass: 'transition-all transtion-1000 ease-out'
  }
}
</script>