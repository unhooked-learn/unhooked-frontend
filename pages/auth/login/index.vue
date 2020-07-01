<template>
<div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
  <div class="w-full max-w-md">
    <div class="absolute top-0 left-0 ">
      <UHAccessibilityButton to='profile'>
        <font-awesome-icon icon="chevron-left" class="p-1 md:p-0 fa-2x" />
      </UHAccessibilityButton>
    </div>  
    <div>
      <Logo />
      <h2 class="mt-4 text-3xl font-extrabold leading-9 text-center text-gray-900">
        {{ $t('pages.login.text') }}
      </h2>
    </div>
    <form class="mt-4" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm">
        <UHInput
            label="email"
            :placeholder="$t('general.input.email')"
            type="email"
            class="rounded-t-md"
            v-model='form.email'
        >
          <template #prepent>
            <font-awesome-icon icon="envelope" class="w-5 mr-2 opacity-50 fa-1x"/>
          </template>
        </UHInput>
        <UHInput
            label="password"
            :placeholder="$t('general.input.password')"
            type="password"
            class="rounded-b-md"
            v-model='form.password'
        >
          <template #prepent>
            <font-awesome-icon icon="key" class="w-5 mr-2 opacity-50 fa-1x"/>
          </template>
        </UHInput>
      </div>

      <div class="flex items-center justify-between mt-6">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox" />
          <label for="remember_me" class="block ml-2 text-sm leading-5 text-gray-900">
             {{ $t('pages.login.remember') }}
          </label>
        </div>

        <div class="text-sm leading-5">
          <nuxt-link class="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline" :to="localePath('/auth/register')">{{ $t('pages.login.register') }}</nuxt-link>
        </div>
      </div>

      <div class="mt-4">
        <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-indigo-500 transition duration-150 ease-in-out group-hover:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
           {{ $t('pages.login.login') }}
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import Logo from '@/components/Logo'
import UHInput from '@/components/generics/UHInput'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'

export default {
  name: 'login',
  layout: 'clear',  
  components: {
    Logo,
    UHInput,
    UHAccessibilityButton
  },
  data(){
    return {
      form: {
        email:'',
        password:'',
      },

    }
  },
  computed: {
  },
  methods: {
  }
}
</script>