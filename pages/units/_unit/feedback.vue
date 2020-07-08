<template>
  <div class="bg-gray-100">
    <!-- <header class="absolute top-0 left-0 z-10 text-white">
      <UHAccessibilityButton class to="/units">
        <font-awesome-icon icon="chevron-left" class="p-1 text-white md:p-0 fa-2x" />
      </UHAccessibilityButton>
    </header> -->

    <main class="flex flex-col justify-between h-full">
      <div class="z-0 bg-gray-800 h-1/6">
        <div class="w-full aspect aspect-3/5">
          <template v-if="$fetchState.pending">
            <div class="h-40 loading-state"></div>
          </template>
          <img v-else :src="units[getId()].mediaName" class="z-0 object-cover" />
        </div>
      </div>

      <div class="z-50 px-4 -mt-20">
       <div class="h-full">
          <!-- rating card -->
        <div
          class="px-4 py-1 text-lg font-semibold text-center text-gray-700 bg-white rounded-md shadow-md"
        >
          <template v-if="$fetchState.pending">
            <div class="h-4 mt-5 loading-state"></div>
          </template>
          <h4 class="mt-5 text-lg uppercase" v-else>{{ units[getId()].name }}</h4>

          <p class="my-3 text-base">{{ $t('pages.course.unit.feedback.text') }}</p>

          <div class="mb-1 star-rating-container">
            <UHStarRating />
          </div>
          <span class="mb-3 text-xs">
            {{
            $t('pages.course.unit.feedback.vote', {
            points: avgFeedback.averageValue,
            maxPoints: '5',
            votes: avgFeedback.feedbackCount
            })         
            }}
          </span>
        </div>
         <!-- /rating card -->
        <div class="fixed bottom-5 right-4">
          <UHButton
            class="w-full px-3 py-3 text-white transition transform bg-gray-600 rounded-md shadow hover:scale-110 hover:bg-gray-700 active:shadow-lg mouse focus:outline-none"
            @click="goHome"
          >
            <div class="text-center">
              <span class="pr-2 uppercase">{{ $t('general.button.finished') }}</span>
              <font-awesome-icon icon="check" class="m-auto text-gray-100 fa-1x" />
            </div>
          </UHButton>
        </div>
       </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHStarRating from '@/components/generics/UHStarRating'
import UHBadge from '@/components/profile/UHBadge'
import UHButton from '@/components/generics/UHButton'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'

export default {
  name: 'feedback',
  layout: 'clear',
  components: {
    UHStarRating,
    UHButton,
    UHAccessibilityButton
  },
  computed: {
    ...mapGetters({
      units: 'units/units',
      user: 'profile/user'
    })
  },
  methods: {
    goHome() {
      this.$router.push({
        path: this.localePath('units')
      })
    },
    getId() {
      return this.$route.params.unit
    }
  },
  activated() {
    // Call fetch again if last fetch more than 5 minues ago
    if (this.$fetchState.timestamp <= Date.now() - 1000 * 60 * 5) {
      this.$fetch()
    }
  },
  async fetch() {
    await this.$store.dispatch('units/fetch')
    await this.$store.dispatch('profile/fetch')
    // await this.$store.dispatch(`units/unlockUnit`, this.$route.params.unit++)
  },
  async asyncData({ params, $axios }) {
    const avgFeedback = await $axios.$get(`unit/${params.unit}/averagefeedback`)
    return { avgFeedback }
   }

}
</script>
