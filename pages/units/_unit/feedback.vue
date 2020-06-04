<template>
  <div class="bg-gray-100">
    <header class="text-gray-100">
      <div class="w-full max-w-md">
        <div
          class="absolute top-0 right-0 object-cover min-w-full aspect aspect-1/2"
        >
          <img
            :src="units[0].imgUrl"
            class="z-0 object-cover overflow-hidden max-h-40"
          />
        </div>
      </div>

      <div class="py-10 text-center bg-gray-800">
        <div class="absolute top-0 left-0 text-white ">
          <UHAccessibilityButton class="z-10" to="/units">
            <font-awesome-icon
              icon="chevron-left"
              class="p-1 text-white md:p-0 fa-2x"
            />
          </UHAccessibilityButton>
        </div>
      </div>
    </header>
    <main class="flex flex-col justify-between h-full">
      <div class="relative">
        <div class="flex justify-center">
          <div class="w-11/12">
            <div
              class="px-4 py-1 text-lg font-semibold text-center text-gray-700 bg-white rounded-md shadow-md"
            >
              <div class="mt-5">{{ units[0].heading }}</div>
              <h4 class="mt-3 mb-3 text-base">
                {{ $t('pages.course.unit.feedback.text') }}
              </h4>

              <div class="mb-1 star-rating-container">
                <UHStarRating />
              </div>
              <h4 class="mb-3 text-xs">
                {{
                  $t('pages.course.unit.feedback.vote', {
                    points: '3,5',
                    maxPoints: '5',
                    votes: '17'
                  })
                }}
              </h4>
            </div>

            <div class="mt-6 mb-6 md:flex">
                <div class="md:w-1/3">
                  <legend class="text-sm tracking-wide uppercase">{{ $t('pages.course.unit.feedback.feedbackText') }}</legend>
                </div>
                <div class="mt-2 md:flex-1 mb:mt-0 md:px-3">
                  <textarea class="w-full p-4 bg-white border-0 rounded-md shadow-lg" placeholder="..." rows="6"></textarea>
                </div>
              </div>      
            
          </div>
      <div class="fixed bottom-5 right-5">
        <UHButton
          class="w-auto px-3 py-3 text-white transition transform bg-gray-600 rounded-full shadow hover:scale-110 hover:bg-gray-700 active:shadow-lg mouse focus:outline-none"
        >
          <span class="pr-2">{{ $t('general.modal.close') }}</span>
          <font-awesome-icon icon="check" class="m-auto text-gray-100 fa-1x" />
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
    UHBadge,
    UHButton,
    UHAccessibilityButton
  },
  computed: {
    ...mapGetters({
      user: 'profile/user',
      achievements: 'profile/achievements',
      units: 'units/units'
    })
  },
  activated() {
    // Call fetch again if last fetch more than 5 minues ago
    if (this.$fetchState.timestamp <= Date.now() - 1000 * 60 * 5) {
      this.$fetch()
    }
  },
  async fetch() {
    await this.$store.dispatch('units/fetch')
  }
}
</script>
