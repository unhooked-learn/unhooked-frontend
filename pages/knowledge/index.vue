<template>
  <div>
    <header class="px-4 pt-12 text-white bg-gray-800">
      <h3 class="font-semibold tracking-wider text-gray-400 uppercase text-md">
        {{ $t('pages.knowledgebase.label') }}
      </h3>
    </header>
    <main class="mb-16 ">
      <div class="relative z-0 h-full px-2 pt-2 mb-10">
        <div class="absolute inset-0 bg-gray-800 h-1/6 -z-10"></div>

        <div class="mx-2">
          <div class="flex flex-wrap -mx-2">
            <template v-if="$fetchState.pending">
              <div class="w-1/2 p-2" v-for="i in 6" :key="i">
                <UHKnowledgebaseCardLoadingState />
              </div>
            </template>

            <div
              v-else
              class="w-1/2 p-2"
              :key="idx"
              v-for="(article, idx) in articles"
            >
              <UHKnowledgebaseCard
                :to="localePath(`/knowledge/${article.imdbID}`)"
                :movie="article"
              />
            </div>
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
  fetchDelay: 1000,
  // fetchOnServer: false,
  components: {
    UHKnowledgebaseCard,
    UHKnowledgebaseCardLoadingState
  },
  computed: {
    ...mapGetters({
      articles: 'knowledge/articles'
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
