<template>
  <div>
    <client-only>
    <div @mouseleave="showCurrentRating(0)" class="inline-block">
      <star-rating 
        inactive-color="#000"
        v-bind:star-size="40"
        v-model="boundRating"
        :show-rating="false" 
        @current-rating="showCurrentRating" 
        @rating-selected="setCurrentSelectedRating" 
        :increment="0.5"
        :border-width="3"
        :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
      >
      </star-rating>    
        
    </div>
      <div class="pt-2 mb-2 cursor-pointer">
        <div>{{currentRating}}</div>
        <button class="text-sm" @click="boundRating = 0;currentRating = $t('pages.course.unit.feedback.noRating');">{{$t('pages.course.unit.feedback.resetRating')}}
        </button>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "UHStarRating",
    methods: {
    setRating: function(rating) {
      this.rating = this.$t('pages.course.unit.feedback.selectedRating', {rating: rating});
    },
    showCurrentRating: function(rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : this.$t('pages.course.unit.feedback.selectRating', {rating: rating}); 
    },
    setCurrentSelectedRating: function(rating) {
      this.currentSelectedRating = this.$t('pages.course.unit.feedback.selectedRating', {rating: rating});
    }
  },
  data () {
    return{
      rating: this.$t('pages.course.unit.feedback.noRating'),
      currentRating: this.$t('pages.course.unit.feedback.noRating'),
      currentSelectedRating: this.$t('pages.course.unit.feedback.noRating'),
      boundRating: 3,
    }
  }
};
</script>