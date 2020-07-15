<template>
  <div>
    <header class="px-4 pt-8 text-white bg-gray-800">
      <h3 class="font-semibold tracking-wider text-gray-400 uppercase text-md">
        {{ $t('pages.infiniteScroll.label') }}
      </h3>
    </header>
    <main>
      <div class="relative z-0 h-full pt-2 mb-10 bg-gray-100">
        <div class="absolute inset-0 bg-gray-800 h-1/6 -z-10"></div>
        <UHInfiniteScroll :items="pictures" @refetch='fetch'>
          <template v-slot:item="{ item }">
            <UHInstagramCard :item="item"/>            
          </template>  
        </UHInfiniteScroll>  
        <UHTimerButton :timer="30000" :text="$t('general.button.skipButtonText')" />
      </div>
    </main>
  </div>
</template>


<script>

import UHInfiniteScroll from '@/components/units/UHInfiniteScroll'
import UHInstagramCard from '@/components/generics/UHInstagramCard'
import UHTimerButton from '@/components/generics/UHTimerButton'
import { mapGetters, mapActions } from 'vuex'
import { achievementName } from '@/helpers/achievements'

export default {
  name: 'infiniteScroll',   
  layout: 'clear',
  fetchOnServer: false,
  data () {
    return {
      pictures: [],
      lastPage: 1,
      name: "John Doe",
    }  
  },
  components: {
      UHInfiniteScroll,
      UHInstagramCard,
      UHTimerButton
  },
  computed: {
    ...mapGetters({
      user: 'profile/user'
    })
  },
  methods: {   
    ...mapActions({
      rewardBadgeDirectly: 'badge/rewardBadgeDirectly'
    }),
    scrollBadge(page) {
      this.rewardBadgeDirectly({
        name: achievementName.GAME_SCROLL_5,
        condition: page
      })
    },
    async fetch(page) {
        this.scrollBadge(page)
        if(page > this.lastPage) {return}
        let pictures = await this.$axios.$get(
        `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=15819227-ef2d84d1681b9442aaa9755b8&q=cat+cats+animals&image_type=all&per_page=10&page=${page}`
        )
        this.pictures.push(...pictures.hits) 
        this.lastPage = Math.floor(pictures.totalHits/10)
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