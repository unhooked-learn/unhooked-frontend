<template>
  <div>
    <header class="px-4 pt-8 text-white bg-gray-800">
      <h3 class="font-semibold tracking-wider text-gray-400 uppercase text-md">
        {{ $t('pages.knowledgebase.label') }}
      </h3>
    </header>
    <main class="mb-16 ">
      <div class="relative z-0 h-full px-2 pt-2 mb-10 bg-gray-100">
        <div class="absolute inset-0 bg-gray-800 h-1/3 -z-10"></div>
          <div class="grid grid-cols-2 gap-4 px-2 mt-3 md:grid-cols-4 md:gap-8">
            <template v-if="$fetchState.pending">
              <div v-for="i in 6" :key="i">
                <UHKnowledgebaseCardLoadingState />
              </div>
            </template>
            <div v-else-if="$fetchState.error">
              {{$fetchState.error.message}}
            </div> 
            <div
              v-else
              :key="idx"
              v-for="(article, idx) in articles"
            >
              <UHKnowledgebaseCard v-if="article.unlocked"
                :to="localePath(`/knowledge/${article.id}`)"
                :card="article"
              />
            </div>

          </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHKnowledgebaseCard from '@/components/knowledge/UHKnowledgebaseCard'
import UHKnowledgebaseCardLoadingState from '@/components/knowledge/UHKnowledgebaseCardLoadingState'

export default {
  name: "KnowledgebaseIndex",
  fetchDelay: 1000,
  // fetchOnServer: false,
  components: {
    UHKnowledgebaseCard,
    UHKnowledgebaseCardLoadingState
  },
  computed: {
    ...mapGetters({
       articles: 'knowledge/articles',
    })
  },
  activated() {
    // Call fetch again if last fetch more than 5 minues ago
    if (this.$fetchState.timestamp <= Date.now() - 1000 * 60 * 5) {
      this.$fetch()
    }
  },
  async fetch() {
    await this.$store.dispatch('knowledge/fetch')
  }
}
</script>
