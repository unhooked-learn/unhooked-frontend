<template>
  <div>
    <header class="px-4 pt-8 text-white bg-gray-800">
      <h3 class="font-semibold tracking-wider text-gray-400 uppercase text-md">
        {{ $t('pages.infiniteScroll.label') }}
      </h3>
    </header>
    <main>
      <div class="relative z-0 h-full pt-6 mb-10">
        <div class="absolute inset-0 bg-gray-800 h-1/6 -z-10"></div>
        <client-only>
          <vue-pull-refresh :on-refresh="onRefresh" :config="config">
            <div
              class="m-3 overflow-hidden bg-white border-b-4 border-blue-500"
              v-for="(item, idx) in news"
              :key="idx"
            >
              <img
                v-if="item.urlToImage"
                :src="item.urlToImage"
                class="object-cover w-full h-32 sm:h-48 md:h-64"
              />
              <div class="p-4 md:p-6">
                <p
                  class="mb-1 text-xs font-semibold leading-none text-blue-500"
                >
                  {{item.author}}
                </p>
                <h3
                  class="mb-2 text-xl font-semibold leading-tight sm:leading-normal"
                >
                  {{ item.title }}
                </h3>
                <div class="flex items-center text-sm">
                  <p class="leading-none">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </vue-pull-refresh>
        </client-only>
        <UHTimerButton :text="$t('general.button.skipButtonText')" />
      </div>
    </main>
  </div>
</template>

<script>
import UHInfiniteScroll from '@/components/units/UHInfiniteScroll'
import UHInstagramCard from '@/components/generics/UHInstagramCard'
import UHTimerButton from '@/components/generics/UHTimerButton'
import { mapGetters } from 'vuex'

export default {
  name: 'pullToRefresh',
  layout: 'clear',
  data() {
    return {
      news: [],
      enabled: false,
      lastPage: 1,
      config: {
        errorLabel: this.$t('pages.pullToRefresh.errorLabel'),
        startLabel: this.$t('pages.pullToRefresh.startLabel'),
        readyLabel: this.$t('pages.pullToRefresh.readyLabel'),
        loadingLabel: this.$t('pages.pullToRefresh.loadingLabel'),
        pullDownHeight: 100,
        topic: ''
      }
    }
  },
  created() {
    setTimeout(() => (this.enabled = true), 10000)
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
    async fetch() {
      this.topic = this.$faker().commerce.product()
      let news = await this.$axios.$get(
        `http://newsapi.org/v2/everything?q=${this.topic}&language=de&pageSize=5&sortBy=publishedAt&apiKey=a1ef913e98c94358994dc8a8f7347aff`
      )
      this.news.unshift(...news.articles)      
    },
    onRefresh() {
      return new Promise((resolve, reject) => {
        setTimeout(()=> {
          this.fetch()
          resolve()
        }, 2000)
      })
    }
  },
  mounted() {
    this.fetch(),
      setTimeout(() => {
        this.timeout = 'Button'
      }, 3000)
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
