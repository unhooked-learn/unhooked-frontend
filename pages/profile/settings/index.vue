<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div class="absolute top-5 left-5 ">
        <nuxt-link :to="localePath('/auth/login')"><font-awesome-icon icon="chevron-left"/></nuxt-link>
    </div>  
    <div>
      <div class="text-center">
        <font-awesome-icon icon="user-circle" class="fa-5x" />
      </div>  
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        {{ $t('pages.settings.label') }}
      </h2>
    </div>
    <form class="mt-8" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md">
        <div>
          <h3 class="text-lg font-medium text-gray-900 ml-1 mb-4" >
            {{ $t('pages.settings.text') }}
          </h3>  
        </div>

        <div class="flex justify-between mb-3">
          <font-awesome-icon icon="flag" class="fa-2x opacity-50"/>
          <nuxt-link :to="switchLocalePath('en')" class="appearance-none rounded-none relative px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"> {{ $t('pages.settings.english') }}</nuxt-link>
          <nuxt-link :to="switchLocalePath('de')" class="appearance-none rounded-none relative px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"> {{ $t('pages.settings.german') }}</nuxt-link>
        </div>

        <div class="flex justify-between m-auto">
            <font-awesome-icon icon="envelope" class="fa-2x opacity-50"/>
            <input aria-label="Email address" name="email" type="email" required class="appearance-none rounded-none relative px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
        </div>
        
        <div class="flex justify-between m-auto">
            <font-awesome-icon icon="user" class="fa-2x opacity-50"/>
            <input aria-label="Name" name="name" type="name" required class="appearance-none rounded-none relative px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Name" />
        </div>

        <div class="flex justify-between m-auto">
            <font-awesome-icon icon="key" class="fa-2x opacity-50"/>
            <input aria-label="Password" name="Password" type="password" required class="appearance-none rounded-none relative px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
        </div>
        
        <div class="flex justify-between m-auto">
            <font-awesome-icon icon="key" class="fa-2x opacity-50"/>
            <input aria-label="Password2" name="Password2" type="password2" required class="appearance-none rounded-none relative px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="reenter Password" />
        </div>

      </div>  

      <div class="mt-6">
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
           {{ $t('pages.settings.save') }}
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'settings',
  components: {
  },
  computed: {
  },
  methods: {
    showModal() {
      this.$modal.show('modal')
    },
    hideModal() {
      this.$modal.hide('modal')
    }
  }
}
</script>