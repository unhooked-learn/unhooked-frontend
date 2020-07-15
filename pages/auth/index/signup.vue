<template>
  <div>
    <h2
      class="mt-4 text-3xl font-extrabold leading-9 text-center text-gray-900"
    >{{ $t('pages.auth.signup') }}</h2>

    <form class="mt-4" @submit.prevent="signup(form)">
      <UHAuthErrors :autherrors="autherrors" />

      <div class="rounded-md">
        <h3 class="mb-4 ml-1 text-lg font-medium text-gray-900">{{ $t('pages.auth.registerText') }}</h3>
        <UHInput
          label="email"
          :placeholder="$t('general.input.email')"
          type="email"
          class="rounded-t-md"
          :has-error="!isEmpty(autherrors)"
          v-model="form.email"
        >
          <template #prepent>
            <font-awesome-icon icon="envelope" class="w-5 mr-2 opacity-50 fa-1x" />
          </template>
        </UHInput>

        <UHInput
          type="username"
          label="username"
          :placeholder="$t('general.input.name')"
          v-model="form.username"
          :transformer="uppercasify"
        >
          <template #prepent>
            <font-awesome-icon icon="user" class="w-5 mr-2 opacity-50 fa-1x" />
          </template>
        </UHInput>

        <UHAuthErrors :autherrors="passwordErrors" />

        <UHInput
          label="password"
          :placeholder="$t('general.input.password')"
          type="password"
          :has-error="!passwordEqual"
          v-model="form.password"
        >
          <template #prepent>
            <font-awesome-icon icon="key" class="w-5 mr-2 opacity-50 fa-1x" />
          </template>
        </UHInput>

        <UHInput
          label="repeatPassword"
          :placeholder="$t('general.input.repeatPassword')"
          class="rounded-b-md"
          type="password"
          :has-error="!passwordEqual"
          v-model="form.repeatPassword"
        >
          <template #prepent>
            <font-awesome-icon icon="key" class="w-5 mr-2 opacity-50 fa-1x" />
          </template>
        </UHInput>
      </div>

      <div class="mt-4">
        <button
          type="submit"
          class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
        >{{ $t('pages.auth.signup') }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import UHInput from '@/components/generics/UHInput'
import UHAuthErrors from '@/components/auth/UHAuthError'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'
import { uppercasify } from '@/helpers/misc'

import { isEmpty } from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AuthIndexSignup',
  layout: 'auth',
  components: {
    UHInput,
    UHAuthErrors,
    UHAccessibilityButton
  },
  data() {
    return {
      form: {
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      autherrors: 'auth/errors',
      username: 'profile/username'
    }),
    passwordEqual() {
      return this.form.password === this.form.repeatPassword
    },
    passwordErrors() {
      return !this.passwordEqual
        ? { message: 'Error: Passwords are not equal' }
        : {}
    }
  },
  methods: {
    uppercasify,
    isEmpty,
    ...mapActions({
      signup: 'auth/signup'
    })
  },
  mounted() {
    this.$store.commit('auth/CLEAN_ERROR')
  },
  watch: {
    username: {
      handler(name) {
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