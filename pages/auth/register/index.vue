<template>
<div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
  <div class="w-full max-w-md">
    <div class="absolute top-5 left-5 ">
        <nuxt-link :to="localePath('/auth/login')"><font-awesome-icon icon="chevron-left"/></nuxt-link>
    </div>  
    <div>
      <Logo />
      <h2 class="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
        {{ $t('pages.register.label') }}
      </h2>
    </div>
    <form class="mt-8" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md">
        <div>
          <h3 class="mb-4 ml-1 text-lg font-medium text-gray-900" >
            {{ $t('pages.register.text') }}
          </h3>  
        </div>
        <UHInput
            label="email"
            :placeholder="$t('general.input.email')"
            type="email"
            class="rounded-t-md"
            v-model='form.email'
        >
          <template #prepent>
            <font-awesome-icon icon="envelope" class="opacity-50 fa-1x"/>
          </template>
        </UHInput>
        <UHInput
            label="name"
            :placeholder="$t('general.input.name')"
            v-model='form.name'
        >
          <template #prepent>
            <font-awesome-icon icon="user" class="opacity-50 fa-1x"/>
          </template>
        </UHInput>
        <UHInput
            label="password"
            :placeholder="$t('general.input.password')"
            type="password"
            v-model='form.password'
        >
          <template #prepent>
            <font-awesome-icon icon="key" class="opacity-50 fa-1x"/>
          </template>
        </UHInput>
        <UHInput
            label="repeatPassword"
            :placeholder="$t('general.input.repeatPassword')"
            class="rounded-b-md"
            type="password"
            v-model='form.repeatPassword'
        >
          <template #prepent>
            <font-awesome-icon icon="key" class="opacity-50 fa-1x"/>
          </template>
        </UHInput>
      </div>  

      <div class="mt-6">
        <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
           {{ $t('pages.register.register') }}
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import Logo from '@/components/Logo'
import UHInput from '@/components/generics/UHInput'

export default {
  name: 'register',
  components: {
    Logo,
    UHInput
  },
  data(){
    return {
      form: {
        email:'',
        name: '',
        password:'',
        repeatPassword:''
      }
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>