<template>
  <div class="h-screen bg-gray-100">
    <header class="text-gray-100">
          <div class="w-full max-w-md">  
      <div class="absolute top-0 right-0 object-cover min-w-full aspect aspect-1/2">
          <img
            :src="units[0].imgurl"
            class="z-0 object-cover overflow-hidden max-h-40"
          />

      </div>
          </div>

      <div class="py-10 text-center bg-gray-800">
        <div class="absolute text-white top-5 left-5 ">
          <UHAccessibilityButton class="z-10" to='/units'>
              <font-awesome-icon
                icon="chevron-left"
                class="text-white opacity-75 hover:opacity-100 fa-lg"
              />
          </UHAccessibilityButton>
        </div>

      </div>
    </header>
    <main class="flex flex-col justify-between h-full">
      <div class="relative">
        <div class="flex justify-center">
          <div class="w-11/12">
            <div class= "px-4 py-1 text-lg font-semibold text-center text-gray-700 bg-gray-100 rounded-md shadow-md">
              <div class="mt-5">{{units[0].heading}}</div>
              <h4 class="mt-3 mb-3 text-base"> {{$t('pages.course.unit.feedback.text')}}</h4>
              
              <div class="mb-1 star-rating-container">
                <UHStarRating
                  :rating="rating"
                  :min-rating="minRating"
                  :max-rating="maxRating"
                  :star-ratio="starRatio"
                  :limit="limit"
                />
              </div>
              <!-- <UHRatingInputs
                :rating="rating"
                :min-rating="minRating"
                :max-rating="maxRating"
                :star-ratio="starRatio"
                :limit="limit"
                @rating-update="handleRatingUpdate"
              /> -->
              <h4 class="mb-3 text-xs">{{ $t('pages.course.unit.feedback.vote', {points: '3,5', maxPoints:rating, votes: '17'}) }}</h4>
            </div> 
          </div>  
        </div>
      </div>
      <div class="px-4 mt-6 bg-gray-100">
        <h3
          class="font-semibold tracking-wider text-gray-600 uppercase text-md "
        >
          {{$t('pages.course.unit.achievement')}}
        </h3>
        <div class="flex justify-center">
          <div class="w-11/12 p-5 mt-2 mb-4 bg-gray-200 rounded-md shadow-md">
            <div class="m-1 text-lg font-semibold text-center text-gray-700">{{achievements[0].description}}</div>
            <UHBadge class="mb-5"
              :badge="achievements[0]"
            />
            <div class="m-1 text-lg font-semibold text-center text-gray-700">{{achievements[6].description}}</div>
            <UHBadge class="mb-5"
              :badge="achievements[6]"
            />
            <div class="m-1 text-lg font-semibold text-center text-gray-700">{{achievements[11].description}}</div>
            <UHBadge class="mb-5"
              :badge="achievements[11]"
            />
          </div>
        </div>  
      </div>
      <div class="flex justify-end p-5 bg-gray-100 border-t-2 rounded-t-lg">
        <UHButton class="" click="#">
          {{ $t('general.modal.close') }}
        </UHButton>
      </div>  
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHStarRating from '@/components/generics/UHStarRating'
import UHRatingInputs from '@/components/generics/UHRatingInputs'
import UHBadge from '@/components/profile/UHBadge'
import UHButton from '@/components/generics/UHButton'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'

export default {
  name: 'feedback',
  layout: 'clear',
  components: {
    UHStarRating,
    UHRatingInputs,
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
  data () {
    return {
      rating: 5,
      minRating: 0,
      maxRating: 10,
      starRatio: 2,
      limit: 1000
    }
  },
  // methods: {
  //   handleRatingUpdate (data) {
  //     let {
  //       rating,
  //       minRating,
  //       maxRating,
  //       starRatio
  //     } = data
  //     this.rating = rating
  //     this.minRating = minRating
  //     this.maxRating = maxRating
  //     this.starRatio = starRatio
  //   }
  // }  
}
</script>