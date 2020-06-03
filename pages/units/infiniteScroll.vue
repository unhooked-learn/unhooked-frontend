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
        <UHInfiniteScroll :items="pictures" @refetch='fetch'>
          <template v-slot:item="{ item }">
            <div class="w-full max-w-xl px-4 py-4 mx-auto bg-white rounded-lg shadow-md">
              <div class="flex flex-row items-center justify-between py-2">
                  <div class="flex flex-row items-center">
                  <a href="#" class="flex flex-row items-center rounded-lg focus:outline-none focus:shadow-outline">
                      <img class="object-cover w-8 h-8 rounded-full" :src="getImage()" alt="">
                      <p class="ml-2 text-base font-medium">{{getName()}}</p>
                  </a>
                  </div>
              </div>
              <div class="mt-2">
                  <div class="object-cover aspect aspect-1/2">
                      <img class="object-cover w-full rounded-lg" :src="item.largeImageURL" />
                  </div>
                  <div class="flex flex-row items-center justify-end px-1 py-2">
                  <button class="flex flex-row items-center rounded-lg focus:outline-none focus:shadow-outline">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                      <span class="ml-1">{{item.likes}}</span>
                  </button>
                  </div>
              </div>
              <div class="py-2">
                  <p class="leading-snug">{{ item.tags }}</p>
              </div>
            </div>

            
          </template>  
        </UHInfiniteScroll>  
      </div>
    </main>
  </div>
</template>

<script>

import UHInfiniteScroll from '@/components/units/UHInfiniteScroll'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'infiniteScroll',   
  layout: 'clear',  
  data () {
    return {
      pictures: [],
      lastPage: 1,
      name: "John Doe"
    }
  },
  components: {
      UHInfiniteScroll,
      UHButton
  },
  computed: {
    ...mapGetters({
      user: 'profile/user'
    })
  },
  methods: {
    getName() {
      return this.$faker().internet.userName();
    },
    getImage() {
      return this.$faker().image.avatar();
    },
    async fetch(page) {
        if(page > this.lastPage) {return}

        let pictures = await axios.get(
        `https://pixabay.com/api/?key=15819227-ef2d84d1681b9442aaa9755b8&q=cat+cats+animals&image_type=all&per_page=10&page=${page}`
        )

        this.pictures.push(...pictures.data.hits) 
        // console.log(pictures)
        this.lastPage = Math.floor(pictures.data.totalHits/10)
    },
  },  
  mounted() {
      this.fetch(1)
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