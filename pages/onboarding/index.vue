<template>
  <div class="onboarding">
    <div
      class="absolute top-0 p-6 font-semibold tracking-wider text-gray-400 uppercase text-md md:ml-8"
    >{{ $t('pages.onboarding.label') }}</div>

    <UHVerticalSlider :options="flickityOptions">
      <section
        class="flex justify-center w-full h-screen py-8"
        v-for="(slide, idx) in slides"
        :key="idx"
      >
        <div class="max-w-2xl px-8 pt-6 text-left">
          <img :src="slide.img" />
          <h2 class="text-3xl leading-8" v-if="slide.heading">{{ $t(slide.heading) }}</h2>

          <p
            class="mt-4 text-xl"
            v-for="(paragraph, pidx) in slide.paragraphs"
            :key="pidx"
          >{{ $t(paragraph) }}</p>

          <div class="flex flex-col mt-10 space-y-4" v-if="idx === slides.length -1">
            <UHButton
              @click="goToRoute()"
              class="focus:shadow-outline-blue hover:text-white"
            >{{ $t('general.button.continue') }}</UHButton>
          </div>
        </div>
      </section>
    </UHVerticalSlider>
  </div>
</template>

<script>
import UHButton from '@/components/generics/UHButton'
import UHVerticalSlider from '@/components/generics/UHVerticalSlider'

export default {
  name: 'Onboarding',
  components: {
    UHButton,
    UHVerticalSlider
  },
  layout: 'auth',
  data() {
    return {
      itemKey: 'onboarded',
      slides: [
        {
          id: 1,
          img: 'https://hosting142537.a2e76.netcup.net/media/logo_big_orig.png',
          heading: 'pages.onboarding.title',
          paragraphs: ['pages.onboarding.intro']
        },
        {
          id: 2,
          img: 'https://hosting142537.a2e76.netcup.net/media/social_girl.svg',
          paragraphs: [
            'pages.onboarding.question1',
            'pages.onboarding.question2'
          ]
        },
        {
          id: 3,
          img: 'https://hosting142537.a2e76.netcup.net/media/social_life.svg',
          paragraphs: ['pages.onboarding.question3']
        },
        {
          id: 4,
          img: 'https://hosting142537.a2e76.netcup.net/media/social_influencer.svg',
          paragraphs: ['pages.onboarding.question4']
        },
        {
          id: 5,
          img: 'https://hosting142537.a2e76.netcup.net/media/social_share.svg',
          paragraphs: ['pages.onboarding.resumee']
        }
      ],
      flickityOptions: {
        initialIndex: 0,
        pageDots: true,
        prevNextButtons: false,
        wrapAround: false,
      }
    }
  },
  methods: {
    goToRoute(target = 'auth-index') {
      localStorage.setItem(this.itemKey, 1)

      this.$router.push(
        this.localePath({
          name: target
        })
      )
    }
  },
  mounted() {
    const onboarded = localStorage.getItem(this.itemKey)
    if (onboarded) {
      this.goToRoute()
    }
  }
}
</script>

<style lang="scss">
.onboarding {
  .flickity-page-dots {
    @apply bottom-0;
    @apply mb-8;
  }
}
</style>
