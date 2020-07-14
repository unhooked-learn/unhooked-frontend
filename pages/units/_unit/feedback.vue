<template>
  <div class="bg-gray-100">
    <main class="flex flex-col justify-between h-full">
      <div class="z-0 bg-gray-800 h-1/6">
        <div class="w-full aspect aspect-3/5">
          <template v-if="$fetchState.pending">
            <div class="h-40 loading-state"></div>
          </template>
          <img v-else :src="currentUnit.mediaName" class="z-0 object-cover" />
        </div>
      </div>

      <div class="z-50 px-4 -mt-20">
        <div class="h-full">
          <!-- rating card -->
          <div
            class="py-1 py-4 text-lg font-semibold text-center text-gray-700 bg-white rounded-md shadow-md"
          >
            <template v-if="$fetchState.pending">
              <div class="h-4 mt-5 loading-state"></div>
            </template>
            <h4 class="mt-5 text-lg uppercase" v-else>{{ currentUnit.name }}</h4>

            <p class="px-3 my-3 text-base">{{ $t('pages.course.unit.feedback.text') }}</p>

            <div class="mb-1 star-rating-container">
              <UHStarRating />
            </div>
            <span class="mt-2 mb-4 text-xs">
              {{
              $t('pages.course.unit.feedback.vote', {
              points: feedback.averageValue,
              maxPoints: '5',
              votes: feedback.feedbackCount
              })
              }}
            </span>
          </div>
          <!-- /rating card -->
          <p
            class="mt-5 text-sm tracking-wider text-center text-gray-700 uppercase"
            v-html="$t('pages.course.unit.feedback.points', {points: userEarnedPoints})"
          ></p>

          <div class="fixed bottom-5 right-4">
            <UHButton
              class="w-full px-3 py-3 text-white transition transform bg-gray-600 rounded-md shadow hover:scale-110 hover:bg-gray-700 active:shadow-lg mouse focus:outline-none"
              @click="goHome"
            >
              <div class="text-center">
                <span class="pr-2 uppercase">{{ $t('general.button.finished') }}</span>
                <font-awesome-icon
                  icon="check"
                  class="inline-block h-5 m-auto text-gray-100 fa-1x"
                />
              </div>
            </UHButton>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UHStarRating from '@/components/generics/UHStarRating'
import UHBadge from '@/components/profile/UHBadge'
import UHButton from '@/components/generics/UHButton'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'
import rewardPoints from '@/mixins/quiz/rewardPoints'

export default {
  name: 'feedback',
  layout: 'clear',
  mixins: [rewardPoints],
  components: {
    UHStarRating,
    UHButton,
    UHAccessibilityButton
  },
  computed: {
    ...mapGetters({
      units: 'units/units',
      user: 'profile/user',
      feedback: 'units/feedback',
      unitScore: 'score/unitScore',
      userScore: 'profile/userScore'
    }),
    getUnitId() {
      return +this.$route.params.unit
    },
    currentUnit() {
      return this.units.find(unit => unit.id === this.getUnitId)
    }
  },
  methods: {
    ...mapActions({
      rewardBadgeUnit: 'badge/rewardBadgeUnit',
      fetchUnits: 'units/fetch',
      fetchProfile: 'profile/fetch',
      fetchFeedback: 'units/fetchFeedback',
      submitScore: 'score/submitScore',
      fetchScore: 'score/fetchScore',
      clearPoints: 'quiz/clearPoints',
      rewardBadgePoints: 'badge/rewardBadgePoints'
    }),
    async goHome() {
      // unlock next unit ¯\_(ツ)_/¯
      await this.$store.dispatch('units/unlockUnit', this.getUnitId + 1)

      this.clearPoints()

      this.$router.push({
        path: this.localePath('units')
      })
    }
  },
  activated() {
    // Call fetch again if last fetch more than 5 minues ago
    if (this.$fetchState.timestamp <= Date.now() - 1000 * 60 * 5) {
      this.$fetch()
    }
  },
  async fetch() {
    await this.fetchUnits()
    await this.fetchFeedback(this.getUnitId)
    await this.rewardBadgeUnit(this.getUnitId)

    await this.submitScore({
      unitId: this.getUnitId,
      score: this.userEarnedPoints
    })

    await this.fetchProfile()

    this.rewardBadgePoints(this.userScore)
  }
}
</script>
