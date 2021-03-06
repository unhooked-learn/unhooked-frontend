<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <div class="absolute top-0 left-0">
        <UHAccessibilityButton to="profile">
          <font-awesome-icon icon="chevron-left" class="w-5 p-1 md:p-0 fa-2x" />
        </UHAccessibilityButton>
      </div>
      <div>
        <div class="flex flex-col items-center text-center">
          <font-awesome-icon icon="user-circle" class="w-20 fa-5x" />
        </div>
        <h2
          class="mt-4 text-3xl font-extrabold leading-9 text-center text-gray-900"
        >{{ $t('pages.settings.label') }}</h2>
      </div>
      <form class="mt-4" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md">
          <h3 class="mb-4 ml-1 text-lg font-medium text-gray-900">{{ $t('pages.settings.text') }}</h3>
          <div class="flex justify-between mb-3">
            <font-awesome-icon icon="flag" class="w-8 opacity-50 fa-2x" />
            <nuxt-link
              :to="switchLocalePath('en')"
              class="relative px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            >{{ $t('pages.settings.english') }}</nuxt-link>
            <nuxt-link
              :to="switchLocalePath('de')"
              class="relative px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            >{{ $t('pages.settings.german') }}</nuxt-link>
          </div>
          <UHInput
            label="email"
            :placeholder="$t('general.input.email')"
            type="email"
            class="rounded-t-md"
            v-model="form.email"
          >
            <template #prepent>
              <font-awesome-icon icon="envelope" class="w-5 mr-2 opacity-50 fa-1x" />
            </template>
          </UHInput>
          <UHInput label="name" :placeholder="$t('general.input.name')" v-model="form.name">
            <template #prepent>
              <font-awesome-icon icon="user" class="w-5 mr-2 opacity-50 fa-1x" />
            </template>
          </UHInput>
          <UHInput
            label="password"
            :placeholder="$t('general.input.password')"
            type="password"
            v-model="form.password"
          >
            <template #prepent>
              <font-awesome-icon icon="key" class="w-5 mr-2 opacity-50 fa-1x" />
            </template>
          </UHInput>
          <UHInput
            label="repeatPassword"
            :placeholder="$t('general.input.repeatPassword')"
            type="password"
            class="rounded-b-md"
            v-model="form.repeatPassword"
          >
            <template #prepent>
              <font-awesome-icon icon="key" class="w-5 mr-2 opacity-50 fa-1x" />
            </template>
          </UHInput>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
          >{{ $t('pages.settings.save') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHInput from '@/components/generics/UHInput'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'

export default {
  name: 'settings',
  fetchOnServer: false,
  fetchDelay: 1000,
  components: {
    UHInput,
    UHAccessibilityButton
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'profile/user'
    })
  },
  async fetch() {
    await this.$store.dispatch('profile/fetch')
  },
  methods: {
    showModal() {
      this.$modal.show('modal')
    },
    hideModal() {
      this.$modal.hide('modal')
    }
  },
  watch: {
    user: {
      handler(user) {
        this.form.email = user.email
        this.form.name = user.username
      },
      deep: true
    }
  }
}
</script>