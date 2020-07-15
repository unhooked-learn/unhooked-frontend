<template>
  <section>
    <h2
      class="text-3xl font-extrabold leading-9 text-center text-gray-900"
    >{{ $t('pages.settings.label') }}</h2>

    <UHAuthErrors :autherrors="autherrors" />

    <div class="w-full p-4 my-3 text-green-900 bg-green-200 border-green-600 rounded-md" v-if="changed">
        <p>{{$t('pages.auth.changeCredentialsSuccessfully')}}</p>
      </div>

    <template v-if="!hasToken">
      <div class="w-full p-4 my-3 text-blue-900 bg-blue-200 border-blue-600 rounded-md">
        <p>{{$t('pages.auth.changeCredentials')}}</p>
      </div>
    </template>
    <template v-else-if="hasToken && !changed">
      <div class="mt-4">
        <p class="mb-4 ml-1 text-lg font-medium text-gray-900">{{ $t('pages.settings.text') }}</p>

        <UHInput label="name" :placeholder="$t('general.input.name')" disabled v-model="form.name">
          <template #prepent>
            <font-awesome-icon icon="user" class="w-5 mr-2 opacity-50 fa-1x" />
          </template>
        </UHInput>

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

        <UHAuthErrors :autherrors="passwordErrors" />
        <UHInput
          label="password"
          :placeholder="$t('general.input.password')"
          :has-error="!passwordEqual"
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
          :has-error="!passwordEqual"
          v-model="form.repeatPassword"
        >
          <template #prepent>
            <font-awesome-icon icon="key" class="w-5 mr-2 opacity-50 fa-1x" />
          </template>
        </UHInput>

        <div class="mt-6">
          <button
            @click="submitForm"
            class="relative flex justify-center w-full px-4 py-2 mb-8 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
          >{{ $t('pages.settings.save') }}</button>
        </div>
      </div>
    </template>
  </section>
</template>


<script>
import { isEmpty } from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import UHInput from '@/components/generics/UHInput'
import UHAuthErrors from '@/components/auth/UHAuthError'

export default {
  name: 'UHUserSettings',
  components: {
    UHInput,
    UHAuthErrors
  },
  data() {
    return {
      hasToken: '',
      changed: false,
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
      user: 'profile/user',
      autherrors: 'auth/errors'
    }),
    passwordEqual() {
      return this.form.password === this.form.repeatPassword
    },
    passwordErrors() {
      return !this.passwordEqual
        ? { message: this.$t('general.errors.passwordEqual') }
        : {}
    }
  },
  methods: {
    ...mapActions({
      updateCredentials: 'auth/updateCredentials'
    }),
    async submitForm() {
      if (this.passwordEqual) {
        await this.updateCredentials(this.form)
        this.changed = true
      }
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
  },
  mounted() {
    this.hasToken = !!localStorage.getItem('token')
    this.$store.commit('auth/CLEAN_ERROR')
  }
}
</script>