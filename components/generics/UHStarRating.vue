<template>
  <div class="flex flex-col items-center py-5 bg-gray-100">
    <client-only>
      <template v-if="rated">
        <div>
          <h3 class="text-xl text-gray-800">{{$t('pages.course.unit.feedback.thankYou')}}</h3>
        </div>
      </template>
      <template v-else>
        <div class="flex justify-center">
          <span class="sr-only">{{boundRating}}</span>

          <star-rating
            inactive-color="#000"
            :star-size="40"
            v-model="boundRating"
            @current-rating="showCurrentRating"
            @rating-selected="setCurrentSelectedRating"
            :increment="1"
            :border-width="3"
            :rounded-corners="true"
            :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
          ></star-rating>
        </div>

        <div class="pt-2 mb-2">
          <button
            class="text-sm hover:underline"
            @click="resetRating"
          >{{$t('pages.course.unit.feedback.resetRating')}}</button>
        </div>

        <div class="mt-2 md:w-1/3" v-if="boundRating">
          <UHButton
            @click="postFeedback(boundRating)"
            class="w-full hover:text-white"
          >{{$t('pages.course.unit.feedback.postRating')}}</UHButton>
        </div>
      </template>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHButton from '@/components/generics/UHButton'

export default {
  name: 'UHStarRating',
  components: {
    UHButton
  },
  data() {
    return {
      rating: 0,
      currentRating: 0,
      currentSelectedRating: 0,
      boundRating: 0,
      rated: false
    }
  },
  computed: {
    ...mapGetters({
      units: 'units/units'
    })
  },

  methods: {
    resetRating() {
      this.boundRating = 0
      this.currentRating = 0
    },
    setRating(rating) {
      this.rating = this.$t('pages.course.unit.feedback.selectedRating', {
        rating
      })
    },
    showCurrentRating(rating) {
      this.currentRating = rating
        ? this.currentSelectedRating
        : this.$t('pages.course.unit.feedback.selectRating', {
            rating
          })
    },
    setCurrentSelectedRating(rating) {
      this.currentSelectedRating = this.$t(
        'pages.course.unit.feedback.selectedRating',
        { rating }
      )
    },
    async postFeedback(rating) {
      await this.$store.dispatch(`units/postFeedback`, {
        unit: this.$route.params.unit,
        rating
      })

      this.rated = true
    }
  }
}
</script>