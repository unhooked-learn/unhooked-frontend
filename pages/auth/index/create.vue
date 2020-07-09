<template>
  <div>
    <h2
      class="mt-4 text-3xl font-extrabold leading-9 text-center text-gray-900"
    >{{ $t('pages.auth.createUsername')}}</h2>

    <div class="mt-10">
      <UHAuthErrors :autherrors="autherrors" />

      <div class="rounded-md shadow-sm">
        <UHInput
          label="username"
          required
          :placeholder="$t('general.input.username')"
          type="username"
          class="rounded-b-md"
          :has-error="!isEmpty(autherrors)"
          v-model="form.user"
          :transformer="uppercasify"
        >
          <template #prepent>
            <font-awesome-icon icon="user" class="w-5 mr-3 opacity-50 fa-1x" />
          </template>

          <template #append>
            <button
              @click.prevent="createRandomName"
              class="z-20 h-full bg-gray-100 border border-gray-300 rounded-tr-md rounded-br-md"
            >
              <font-awesome-icon icon="sync" class="w-5 mx-3 opacity-50 fa-1x" />
            </button>
          </template>
        </UHInput>
      </div>

      <div class="mt-4">
        <button
          @click="createNewUser"
          class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
        >{{$t('pages.auth.continue')}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import UHInput from '@/components/generics/UHInput'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'
import UHAuthErrors from '@/components/auth/UHAuthError'
import { isEmpty } from 'lodash'
import { uppercasify } from '@/helper'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AuthIndexCreate',
  layout: 'clear',
  components: {
    UHAuthErrors,
    UHInput,
    UHAccessibilityButton
  },
  data() {
    return {
      form: {
        user: ''
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
    uppercasify,
    isEmpty,
    ...mapActions({
      createUser: 'auth/createUser'
    }),
    createNewUser() {
      if (!this.form.user) {
        return
      }
      this.createUser(this.form.user)

      this.$router.push(
        this.localePath({
          name: 'units'
        })
      )
    },
    createRandomName() {
      this.form.user = this.$faker()
        .helpers.slugify(this.$faker().name.firstName())
        .toUpperCase()
    }
  },
  mounted() {
    this.$store.commit('auth/CLEAN_ERROR')
  }
}
</script>