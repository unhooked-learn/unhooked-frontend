<template>
  <div>
    <template v-if="$fetchState.pending">
      <div v-for="i in 6" :key="i">
        <UHNewsCardLoadingState />
      </div>
    </template>

    <client-only>
      <vue-pull-refresh
        v-if="!$fetchState.pending"
        :on-refresh="onRefresh"
        :config="config"
      >
        <div
          class="m-3 mt-5 mb-5 overflow-hidden bg-white border-b-4 border-blue-500"
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
              <p class="leading-tight" v-html="item.description"></p>
            </div>
          </div>
        </div>
      </vue-pull-refresh>
    </client-only>
  </div>
</template>

<script>
import UHNewsCardLoadingState from '@/components/generics/UHNewsCardLoadingState'

export default {
  name: 'UHNewsCard',
  fetchDelay: 1000,
  fetchOnServer: false,
  components: {
    UHNewsCardLoadingState
  },
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
  async fetch() {
    this.topic = this.$faker().commerce.product()
    let news = await this.$axios.$get(
      `http://newsapi.org/v2/everything?q=${this.topic}&language=de&pageSize=5&apiKey=a1ef913e98c94358994dc8a8f7347aff`
    )
    this.news.unshift(...news.articles)
  },
  methods: {
    onRefresh() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$fetch()
          resolve()
        }, 2000)
      })
    },
    errorSrc(error) {
      console.log(error)
    }
  }
}
</script>
