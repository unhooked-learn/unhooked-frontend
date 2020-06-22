<template>
  <div class="slides">
    <div
      class="p-6 font-semibold tracking-wider text-gray-400 uppercase text-md md:ml-8"
    >
      {{ $t('pages.course.module', { number: $route.params.unit }) }}
    </div>

    <UHVerticalSlider :options="flickityOptions">
      <div class="w-full p-5 bg-gray-100" :key="idx" v-for="(content, idx) in contents">
        <div class="my-6 text-lg font-semibold uppercase">
          {{ content.headline }}
        </div>
        <div
          v-if="content.mediaName"
          class="flex justify-end object-cover mb-6 aspect aspect-1/2"
        >
          <img class="object-cover" :src="content.mediaName" />
        </div>
        <div class="mb-6">{{ content.text }}</div>
      </div>
      <div class="w-full p-5 bg-gray-100">
        <div class="my-6 text-lg font-semibold uppercase">
           {{ $t('pages.course.unit.slides.finished')}}
        </div>
        <div class="mb-6">{{ $t('pages.course.unit.slides.text', { number: $route.params.unit }) }}</div>
        <UHButton @click="goToQuiz">{{ $t('pages.course.unit.slides.startQuiz')}}</UHButton>
      </div>
    </UHVerticalSlider>
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
        initialIndex: 0,
        pageDots: true,
        resize: false,
        prevNextButtons: false,
        wrapAround: false,
        adaptiveHeight: true
      }
    }
  },
  computed: {
    ...mapGetters({
      contents: 'units/content'
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
    goToQuiz() {
       this.$router.push(
          this.localePath({
            name: 'units-unit-quiz-quiz',
            params: { unit: this.$route.params.unit, quiz: 1 }
          })
        )
    },
  }
}
</script>

<style lang="scss">
.slides {
  .flickity-page-dots {
    @apply top-0;
    bottom: 100%;
  }
}
</style>
