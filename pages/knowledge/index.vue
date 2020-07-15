<template>
  <div>
    <header class="px-4 pt-8 text-white bg-gray-800">
      <h3
        class="font-semibold tracking-wider text-gray-400 uppercase text-md"
      >{{ $t('pages.knowledgebase.label') }}</h3>
    </header>
    <main class="pb-20 bg-gray-100">
      <div class="relative z-0 h-full px-2 pt-2 bg-gray-100">
        <div class="absolute inset-0 bg-gray-800 h-1/3 -z-10"></div>
        <div class="grid grid-cols-2 gap-4 px-2 mt-3 md:grid-cols-4 md:gap-8">
          <template v-if="$fetchState.pending">
            <div v-for="i in 6" :key="i">
              <UHKnowledgebaseCardLoadingState />
            </div>
          </template>
          <div v-else-if="$fetchState.error">{{$fetchState.error.message}}</div>
          <div v-else :key="idx" v-for="(article, idx) in unlockedArticles">
            <UHKnowledgebaseCard :to="localePath(`/knowledge/${article.id}`)" :card="article" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { isEmpty } from 'lodash'
import { achievementName } from '@/helpers/achievements'
import UHKnowledgebaseCard from '@/components/knowledge/UHKnowledgebaseCard'
import UHKnowledgebaseCardLoadingState from '@/components/knowledge/UHKnowledgebaseCardLoadingState'

export default {
  name: 'KnowledgebaseIndex',
  fetchDelay: 1000,
  // fetchOnServer: false,
  components: {
    UHKnowledgebaseCard,
    UHKnowledgebaseCardLoadingState
  },
  data() {
    return {
      config: {
        knowledgeTimer: 0,
        itemKey: 'achivements.knowledge'
      },
      app: {
        knowledgebaseTime: 0
      }
    }
  },
  activated() {
    // Call fetch again if last fetch more than 5 minues ago
    if (this.$fetchState.timestamp <= Date.now() - 1000 * 60 * 5) {
      this.$fetch()
    }
  },
  computed: {
    ...mapGetters({
      articles: 'knowledge/articles'
    }),
    unlockedArticles() {
      return this.articles.filter(article => article.unlocked)
    }
  },
  methods: {
    ...mapActions({
      rewardBadgeDirectly: 'badge/rewardBadgeDirectly'
    }),

    knowledgebaseOpen() {
      this.config.knowledgeTimer = setInterval(() => {
        this.app.knowledgebaseTime++

        this.rewardBadgeDirectly({
          name: achievementName.APP_KNOWLEDGE_10,
          condition: this.app.knowledgebaseTime
        })

        this.saveData()
      }, 1000 * 60)
    },
    saveData() {
      localStorage.setItem(this.config.itemKey, JSON.stringify(this.app))
    }
  },

  async fetch() {
    await this.$store.dispatch('knowledge/fetch')
  },
  mounted() {
     let app = localStorage.getItem(this.config.itemKey)

    if (isEmpty(app)) {
      this.saveData()
    } else {
      this.app = JSON.parse(app)
    }
    
    this.knowledgebaseOpen()
  },
  beforeDestroy() {
    clearInterval(this.config.knowledgeTimer)
  },
}
</script>
