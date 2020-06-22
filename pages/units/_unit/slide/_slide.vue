<template>
  <div>
    <div
      class="p-6 font-semibold tracking-wider text-gray-400 uppercase text-md md:ml-8"
    >
      unit slides
    </div>

    <UHVerticalSlider :options="flickityOptions">
      <div class="w-full p-5"  :key="idx" v-for="(content, idx) in contents">
        <div>{{content.headline}}</div>  
        <div class="flex justify-end object-cover aspect aspect-1/2">
        <img v-if="content.mediaName" class="object-cover" :src="content.mediaName">
        </div>
        <div>{{content.text}}</div>
      </div>
    </UHVerticalSlider>

    <div class="flex flex-row justify-between p-3 pb-4 justify">
      <UHButton @click="previous()">Previous</UHButton>
      <UHButton @click="next()">Next</UHButton>
    </div>
  </div>
</template>

<script>
import UHButton from '@/components/generics/UHButton'
import UHVerticalSlider from '@/components/generics/UHVerticalSlider'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Slide',
  components: {
    UHButton,
    UHVerticalSlider
  },
  layout: 'clear',
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        pageDots: true,
        resize: true,
        prevNextButtons: false,
        wrapAround: false
      }
    }
  },
  computed: {
    ...mapGetters({
      contents: 'units/content',
    })
  },
  activated() {
    // Call fetch again if last fetch more than 5 minues ago
    if (this.$fetchState.timestamp <= Date.now() - 1000 * 60 * 5) {
      this.$fetch()
    }
  },
  async fetch() {
    await this.$store.dispatch('units/fetchContent', this.$route.params.unit)
  },
  methods: {
    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    }
  }
}
</script>
