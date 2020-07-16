<template>
  <div>
    <header class="px-4 pt-8 text-white bg-gray-800">
      <h3
        class="font-semibold tracking-wider text-gray-400 uppercase text-md"
      >{{ $t('pages.pullToRefresh.label') }}</h3>
    </header>
    
    <main>
      <div class="relative z-0 h-full pt-6 bg-gray-100">
        <div class="absolute inset-0 bg-gray-800 h-1/6 -z-10"></div>

        <div v-if="$fetchState.pending">
          <div v-for="i in 6" :key="i">
            <UHNewsCardLoadingState />
          </div>
        </div>
        <div v-else>
          <vue-pull-refresh :on-refresh="onRefresh" :config="config">
            <UHNewsCard :item="item" v-for="(item, idx) in news" :key="idx" />
          </vue-pull-refresh>
        </div>

        <UHTimerButton :timer="30000" :text="$t('general.button.skipButtonText')" />

      </div>
    </main>
  </div>
</template>

<script>
import UHNewsCard from '@/components/generics/UHNewsCard'
import UHTimerButton from '@/components/generics/UHTimerButton'
import UHNewsCardLoadingState from '@/components/generics/UHNewsCardLoadingState'

import { mapActions } from 'vuex'
import { achievementName } from '@/helpers/achievements'

import axios from 'axios'

const API_KEY = '8a0b0a13-f5a6-41de-9311-6ffd071bf522'

export default {
  name: 'GamePullToRefresh',
  layout: 'clear',
  fetchDelay: 1000,
  fetchOnServer: false,
  components: {
    UHNewsCardLoadingState,
    UHTimerButton,
    UHNewsCard
  },
  data() {
    return {
      config: {
        errorLabel: this.$t('pages.pullToRefresh.errorLabel'),
        startLabel: this.$t('pages.pullToRefresh.startLabel'),
        readyLabel: this.$t('pages.pullToRefresh.readyLabel'),
        loadingLabel: this.$t('pages.pullToRefresh.loadingLabel'),
        pullDownHeight: 100,
        currentPage: 1
      },
      news: []
    }
  },
  async fetch() {
    
    // create a new axios instance without set headers
    let news = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://content.guardianapis.com/search?',
      {
        params: {
          page: this.config.currentPage,
          'page-size': 5,
          'api-key': API_KEY
        }
      }
    )
    this.news.unshift(...news.data.response.results)
    this.config.currentPage += 1
  },
  methods: {
    ...mapActions({
      rewardBadgeDirectly: 'badge/rewardBadgeDirectly'
    }),
    onRefresh() {
      this.pullBadge(this.news.length)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$fetch()
          resolve()
        }, 2000)
      })
    },

    pullBadge(news) {
      this.rewardBadgeDirectly({
        name: achievementName.GAME_NEWS_50,
        condition: news
      })
    }
  }
}
</script>
