<template>
  <div
    class="flex items-center justify-center px-4 py-8 bg-gray-100 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md">
      <div
        class="absolute top-0 right-0 object-cover min-w-full aspect aspect-1/2"
      >    
        <img
          :src="article.mediaName"
          class="object-cover overflow-hidden opacity-75 rounded-b-md max-h-40"
        />
      </div>

      <div class="absolute top-0 left-0 text-white md:top-5 md:left-5">
        <UHAccessibilityButton to='knowledge'>
          <font-awesome-icon icon="chevron-left" class="p-1 md:p-0 fa-2x" />
        </UHAccessibilityButton>  
      </div>
      <div>
        <h2
          class="text-2xl font-extrabold leading-9 text-center text-gray-900 mt-36"
        >
          {{ article.title }}
        </h2>
      </div>
      <div class="mt-4 mb-4 text-gray-900"
              :key="idx"
              v-for="(block, idx) in article.knowledgebaseContents">
              <div class="flex justify-end object-cover mb-6 aspect aspect-1/2">
                <img class="object-cover" :src="block.mediaName" :v-if="block.mediaType == 'IMAGE'">
              </div>
        <div class="py-2">
          {{block.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'

export default {
  layout: 'clear',
  components: {
    UHAccessibilityButton
  },
  computed: {
    ...mapGetters({
       article: 'knowledge/article',
    })
  },
  activated() {
    // Call fetch again if last fetch more than 5 minues ago
    if (this.$fetchState.timestamp <= Date.now() - 1000 * 60 * 5) {
      this.$fetch()
    }
  },
  async fetch() {
    await this.$store.dispatch('knowledge/fetchArticle', this.$route.params.chapter)
  }
}
</script>
