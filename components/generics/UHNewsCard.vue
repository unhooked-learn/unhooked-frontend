<template>
  <client-only>
    <vue-pull-refresh :on-refresh="onRefresh" :config="config">
      <div
        class="m-3 overflow-hidden bg-white border-b-4 border-blue-500"
        v-for="(item, idx) in news"
        :key="idx"
      >
        <img
          v-if="item.urlToImage" 
          @error="errorSrc(error)"
          :src="item.urlToImage"
          class="object-cover w-full h-32 sm:h-48 md:h-64"
        />
        <div class="p-4 md:p-6">
          <p class="mb-1 text-xs font-semibold leading-none text-blue-500">
            {{ item.author }}
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
</template>

<script>
export default {
  name: 'UHNewsCard',
  data() {
    return {
      news: [],
      title: '',
      urlToImage: '',
      description: '',
      author: '',
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
  methods: {
    async fetch() {
      this.topic = this.$faker().commerce.product()
      let news = await this.$axios.$get(
        `http://newsapi.org/v2/everything?q=${this.topic}&language=de&pageSize=5&apiKey=a1ef913e98c94358994dc8a8f7347aff`
      )
      this.news.unshift(...news.articles)
    },
    onRefresh() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.fetch()
          resolve()
        }, 2000)
      })
    },
    errorSrc(error) {
      console.log(error)
    }
  },
  mounted() {
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
