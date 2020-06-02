<template>
  <div class="text-yellow-300">
    <font-awesome-icon
      class="fa-2x"
      icon="star"
      :key="`fs${i}`"
      v-for="(fs, i) in fullStars"
    />

    <font-awesome-layers
      class="fa-2x"
      :key="`hs${i}`"
      v-for="(hs, i) in halfStars"
    >
      <font-awesome-icon 
        icon="star-half"
      />
      <font-awesome-icon
        class="opacity-25"
        flip="horizontal"
        :icon="['fas', 'star-half']"
      />
    </font-awesome-layers>

    <font-awesome-icon
      class="opacity-25 fa-2x star"
      :icon="['fas', 'star']"
      :key="`es${i}`"
      v-for="(es, i) in emptyStars"
    />
  </div>
</template>

<script>
import ratingIsValid from '@/lib/validate'

export default {
  name: "UHStarRating",
    beforeMount () {
    let {rating, minRating, maxRating, starRatio, limit} = this
    if (!ratingIsValid(rating, minRating, maxRating, starRatio, limit)) {
      throw new Error(
        `Illegal rating values detected. You should check your initial App state. (rating: ${rating}, minRating: ${minRating}, maxRating: ${maxRating}, starRatio: ${starRatio}, limit: ${limit})`
      )
    }
  },
  props: {
    minRating: {
      type: Number,
      default: 0
    },
    maxRating: {
      type: Number,
      default: 10
    },
    rating: {
      type: Number,
      default: 5
    },
    starRatio: {
      type: Number,
      default: 2
    },
    limit: {
      type: Number,
      default: 1000
    }
  },
  computed: {
    fullStars () {
      let { rating, starRatio } = this
      return Math.floor(rating / starRatio)
    },
    halfStars () {
      let { rating, starRatio } = this
      let x = rating % starRatio
      let i = (1 / 2) * starRatio
      return x >= i ? 1 : 0
    },
    emptyStars () {
      return this.maxStars - this.fullStars - this.halfStars
    },
    maxStars () {
      let { maxRating, starRatio } = this
      return Math.ceil(maxRating / starRatio)
    }
  },
};
</script>