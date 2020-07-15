<template>
<div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
  <div class="w-full max-w-md">
    <div class="absolute top-0 left-0">
      <UHAccessibilityButton @click="$router.go(-1)">
        <font-awesome-icon icon="chevron-left" class="p-1 md:p-0 fa-2x" />
      </UHAccessibilityButton>
    </div>  
    <div>
      <Logo />
      <h2 class="mt-4 text-3xl font-extrabold leading-9 text-center text-gray-900">
        {{ $t('pages.guest.label') }}
      </h2>
    </div>
    <form class="mt-4" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md">
        <div>
          <h3 class="mb-4 ml-1 text-lg font-medium text-gray-900" >
            {{ $t('pages.guest.text') }}
          </h3>  
        </div>
        <UHInput
            label="name"
            :placeholder="$t('general.input.name')"
            v-model='form.name'
        >
          <template #prepent>
            <font-awesome-icon icon="user" class="opacity-50 fa-1x"/>
          </template>
        </UHInput>
      </div>  

      <div class="mt-4">
        <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
           {{ $t('pages.guest.login') }}
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
  name: 'guestLogin',
  layout: 'auth',  
  components: {
    Logo,
    UHInput,
    UHAccessibilityButton
  },
  data(){
    return {
      form: {
        name: '',
      }
    }
  },
}
</script>