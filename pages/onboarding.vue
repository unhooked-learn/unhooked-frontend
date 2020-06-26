<template>
  <div class="onboarding">
    <div
      class="p-6 font-semibold tracking-wider text-gray-400 uppercase text-md md:ml-8"
    >
      {{ $t('pages.onboarding.label') }}
    </div>

    <UHVerticalSlider :options="flickityOptions">
    <div class="flex justify-center w-full py-8 bg-gray-100">
      <div class="max-w-2xl pl-8 pr-8 text-center">
          <img src="@/assets/images/logo_big_orig.png">
          <div class="text-3xl font-bold md:text-3xl">{{ $t('pages.onboarding.title') }}</div>
          <div class="mt-4 text-xl font-normal">{{ $t('pages.onboarding.intro') }}</div>
      </div>
    </div>

    <div class="flex justify-center w-full py-8">
      <div class="max-w-2xl pl-8 pr-8 text-left">
          <img src="@/assets/images/svg/social_girl.svg">
          <li class="mt-4 text-xl font-bold md:text-xl">{{ $t('pages.onboarding.question1') }}</li>
          <li class="mt-4 text-xl font-bold md:text-xl">{{ $t('pages.onboarding.question2') }}</li>         
      </div>
    </div>

    <div class="flex justify-center w-full py-8">
      <div class="max-w-2xl pl-8 pr-8 text-left">
          <img src="@/assets/images/svg/social_life.svg">
          <li class="mt-4 text-xl font-bold md:text-xl">{{ $t('pages.onboarding.question3') }}</li> 
      </div>
    </div>

    <div class="flex justify-center w-full py-8">
      <div class="max-w-2xl pl-8 pr-8 text-left">
          <img src="@/assets/images/svg/social_influencer.svg">
          <li class="mt-4 text-xl font-bold md:text-xl">{{ $t('pages.onboarding.question4') }}</li> 
      </div>
    </div>

    <div class="flex justify-center w-full py-8">
      <div class="max-w-2xl pl-8 pr-8 text-left">
          <img src="@/assets/images/svg/social_share.svg">
          <li class="mt-4 text-xl font-bold md:text-xl">{{ $t('pages.onboarding.resumee') }}</li> 
          <div class="flex flex-col mt-12">
            <UHButton @click="goToRegister"> {{ $t('general.button.register') }} </UHButton>
            <UHButton class="mt-6" @click="goToGuestLogin"> {{ $t('general.button.guest') }} </UHButton>
          </div>  
      </div>
    </div>
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
  methods: {
    goToRegister() {
       this.$router.push(
          this.localePath({
            name: 'auth-register'
          })
        )
    },
    goToGuestLogin() {
       this.$router.push(
          this.localePath({
            name: 'auth-guest'
          })
        )
    },
  }
}
</script>

<style lang="scss">
.onboarding {
  .flickity-page-dots {
    @apply top-0;
    bottom: 100%;
  }
}
</style>
