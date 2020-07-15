<template>
  <div>
    <h2
      class="mt-4 text-3xl font-extrabold leading-9 text-center text-gray-900"
    >
      {{ $t('pages.auth.loginText') }}
    </h2>
    <form class="mt-4" @submit.prevent="signin(form)">
      <UHAuthErrors :autherrors="autherrors" />

      <div class="rounded-md shadow-sm">
        <UHInput
          label="username"
          :placeholder="$t('general.input.username')"
          type="username"
          class="rounded-t-md"
          :has-error="!isEmpty(autherrors)"
          v-model="form.username"
        >
          <template #prepent>
            <font-awesome-icon icon="user" class="w-5 mr-3 opacity-50 fa-1x" />
          </template>
        </UHInput>

        <UHInput
          label="password"
          :placeholder="$t('general.input.password')"
          type="password"
          class="rounded-b-md"
          :has-error="!isEmpty(autherrors)"
          v-model="form.password"
        >
          <template #prepent>
            <font-awesome-icon icon="key" class="w-5 mr-3 opacity-50 fa-1x" />
          </template>
        </UHInput>
      </div>

      <div class="mt-4">
        <button
          type="submit"
          class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              class="w-5 h-5 text-indigo-500 transition duration-150 ease-in-out group-hover:text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          {{ $t('pages.auth.signin') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import UHInput from '@/components/generics/UHInput'
import UHAuthErrors from '@/components/auth/UHAuthError'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'

import { isEmpty } from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AuthIndexSignin',
  layout: 'auth',
  components: {
    UHInput,
    UHAuthErrors,
    UHAccessibilityButton
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      autherrors: 'auth/errors',
      username: 'profile/username'
    })
  },
  methods: {
    isEmpty,
    ...mapActions({
      signin: 'auth/signin'
    })
  },
  mounted() {
    this.$store.commit('auth/CLEAN_ERROR')
  },
  watch: {
    username: {
      handler(name) {
        console.log("Name: ",name)
        if (name) {
          this.$router.push(
            this.localePath({
              name: 'units'
            })
          )
        }
      },
      deep: true
    }
  }
}
</script>
