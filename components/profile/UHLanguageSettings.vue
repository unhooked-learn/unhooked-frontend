<template>
  <section>
    <h3
      class="mt-4 text-2xl font-extrabold leading-9 text-center text-gray-900"
    >{{ $t('pages.settings.language') }}</h3>

    <div
      class="flex flex-col justify-center my-5 bg-white border border-gray-300 rounded-md shadow-md"
    >
      <div class="flex w-full ">
        <div class="flex items-center justify-center w-1/5 bg-red-500">
          <font-awesome-icon icon="exclamation-triangle" class="w-12 p-1 text-white md:p-0 fa-3x" />
        </div>
        <div class="flex items-center justify-center w-4/5 p-3">
          <p class=" text-gray-900 text-md">{{ $t('pages.settings.disclaimer') }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between mb-8 font-medium">
      <font-awesome-icon icon="globe" class="w-12 opacity-50 fa-2x" />
      <nuxt-link
        :to="switchLocalePath('en')"
        class="relative px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
      >{{ $t('pages.settings.english') }}</nuxt-link>

      <nuxt-link
        :to="switchLocalePath('de')"
        class="relative px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
      >{{ $t('pages.settings.german') }}</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
    name: 'UHLanguageSettings'
}
</script>