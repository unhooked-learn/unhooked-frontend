<template>
  <div
    class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <UHUserDeleteModal />

    <div class="w-full max-w-md">
      <div class="absolute top-0 left-0">
        <UHAccessibilityButton to="profile">
          <font-awesome-icon icon="chevron-left" class="w-5 p-1 md:p-0 fa-2x" />
        </UHAccessibilityButton>
      </div>
      <div>
        <h2 class="text-3xl font-extrabold leading-9 text-center text-gray-900">
          {{ $t('pages.settings.label') }}
        </h2>
      </div>
      <form class="mt-4" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md">
          <h3 class="mb-4 ml-1 text-lg font-medium text-gray-900">
            {{ $t('pages.settings.text') }}
          </h3>

          <UHInput
            label="email"
            :placeholder="$t('general.input.email')"
            type="email"
            class="rounded-t-md"
            v-model="form.email"
          >
            <template #prepent>
              <font-awesome-icon
                icon="envelope"
                class="w-5 mr-2 opacity-50 fa-1x"
              />
            </template>
          </UHInput>
          <UHInput
            label="name"
            :placeholder="$t('general.input.name')"
            v-model="form.name"
          >
            <template #prepent>
              <font-awesome-icon
                icon="user"
                class="w-5 mr-2 opacity-50 fa-1x"
              />
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

          <div class="mt-6">
            <button
              type="submit"
              class="relative flex justify-center w-full px-4 py-2 mb-8 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              {{ $t('pages.settings.save') }}
            </button>
          </div>

          <hr class="border-2 rounded-lg" />

          <h3
            class="mt-4 text-2xl font-extrabold leading-9 text-center text-gray-900"
          >
            {{ $t('pages.settings.language') }}
          </h3>
          <div
            class="flex flex-col justify-center my-5 bg-white border border-gray-300 rounded shadow-lg"
          >
            <div class="flex w-full h-full">
              <div class="flex items-center justify-center w-1/5 bg-red-500">
                <font-awesome-icon
                  icon="exclamation-triangle"
                  class="w-5 p-1 text-white md:p-0 fa-3x"
                />
              </div>
              <div class="flex items-center justify-center w-4/5 ">
                <p class="m-2 text-gray-900 text-md">
                  {{ $t('pages.settings.disclaimer') }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-between mb-8">
            <font-awesome-icon icon="flag" class="w-12 opacity-50 fa-2x" />
            <nuxt-link
              :to="switchLocalePath('en')"
              class="relative px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              >{{ $t('pages.settings.english') }}</nuxt-link
            >

            <nuxt-link
              :to="switchLocalePath('de')"
              class="relative px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              >{{ $t('pages.settings.german') }}
            </nuxt-link>
          </div>
        </div>
      </form>
      <hr class="border-2 rounded-lg" />
      <h3
        class="mt-4 text-2xl font-extrabold leading-9 text-center text-gray-900"
      >
        {{ $t('pages.settings.profile.label') }}
      </h3>

      <div
        class="flex items-center justify-between pl-3 pr-6 my-5 text-white bg-red-500 border-2 border-red-500 rounded-lg"
      >
        {{ $t('pages.settings.profile.delete') }}

        <UHAccessibilityButton @click="showModal()">
          <font-awesome-icon icon="trash" class="w-5 p-1 md:p-0 fa-2x" />
          {{ $t('pages.settings.profile.deleteButton') }}
        </UHAccessibilityButton>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHInput from '@/components/generics/UHInput'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'
import UHUserDeleteModal from '@/components/generics/UHUserDeleteModal'

export default {
  name: 'settings',
  fetchOnServer: false,
  fetchDelay: 1000,
  components: {
    UHInput,
    UHAccessibilityButton,
    UHUserDeleteModal
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
      this.$modal.show('delete-user')
    },
    hideModal() {
      this.$modal.hide('delete-user')
    },
    async delUser() {
      //await this.$store.dispatch('profile/deleteUser')
      this.$router.push(this.localePath('auth-index'))
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
