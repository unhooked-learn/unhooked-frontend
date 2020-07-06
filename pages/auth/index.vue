<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <!--  <div class="absolute top-0 left-0">
        <UHAccessibilityButton to="profile">
          <font-awesome-icon icon="chevron-left" class="p-1 md:p-0 fa-2x" />
        </UHAccessibilityButton>
      </div>-->
      <Logo />

      <nuxt-child />

      <div
        class="relative flex items-center justify-center w-full h-10 my-5 leading-none text-center"
      >
        <hr class="w-full border border-b border-gray-300" />
        <span class="absolute px-5 text-3xl font-light text-gray-400 uppercase bg-gray-50">{{$t('pages.auth.or')}}</span>
      </div>

      <div class="space-y-4">
        <nuxt-link
          :to="getTargetRoutePath('auth-index-create')"
          v-slot="{ isActive, href, navigate }"
          exact
        >
          <a
            :href="href"
            @click="navigate"
            class="flex items-center w-full px-4 py-2 rounded-full outline-none focus:shadow-outline focus:bg-indigo-100"
            :class="{
        'bg-indigo-100 text-indigo-600': isActive,
        'text-gray-400 hover:text-gray-600': !isActive
      }"
          >
            <p class="w-full ml-2 text-sm text-center text-indigo-600 uppercase">{{$t('pages.auth.createUser')}}</p>
          </a>
        </nuxt-link>

        <nuxt-link
          :to="getTargetRoutePath('auth-index-signin')"
          v-slot="{ isActive, href, navigate }"
          exact
        >
          <a
            :href="href"
            @click="navigate"
            class="flex items-center w-full px-4 py-2 rounded-full outline-none focus:shadow-outline focus:bg-indigo-100"
            :class="{
        'bg-indigo-100 text-indigo-600': isActive,
        'text-gray-400 hover:text-gray-600': !isActive
      }"
          >
            <p class="w-full ml-2 text-sm text-center text-indigo-600 uppercase">{{$t('pages.auth.signin')}}</p>
          </a>
        </nuxt-link>

        <nuxt-link
          :to="getTargetRoutePath('auth-index-signup')"
          v-slot="{ isActive, href, navigate }"
          exact
        >
          <a
            :href="href"
            @click="navigate"
            class="flex items-center w-full px-4 py-2 rounded-full outline-none focus:shadow-outline focus:bg-indigo-100"
            :class="{
        'bg-indigo-100 text-indigo-600': isActive,
        'text-gray-400 hover:text-gray-600': !isActive
      }"
          >
            <p class="w-full ml-2 text-sm text-center text-indigo-600 uppercase">{{$t('pages.auth.signup')}}</p>
          </a>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import UHInput from '@/components/generics/UHInput'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'
import { isEmpty } from 'lodash'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'login',
  layout: 'clear',
  components: {
    Logo,
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
      username: 'profile/username',
      hasToken: 'auth/hasToken'
    })
  },
  methods: {
    isEmpty,
    ...mapActions({
      createUser: 'auth/createUser',
      loadLocalUser: 'auth/loadLocalUser'
    }),
    getTargetRoutePath(route) {
      return this.localePath({
        name: route
      })
    },
    checkusername() {
      // if a token and username is given
      // signin user
      if (this.hasToken && this.username) {
        this.$router.push(this.getTargetRoutePath('units'))
      }

      // if no username is given
      // go to create username screen
      if (!this.username) {
        this.$router.push(this.getTargetRoutePath('auth-index-create'))
      }
    }
  },
  mounted() {
    this.$store.commit('auth/CLEAN_ERROR')
    this.loadLocalUser()
    this.checkusername()
  }
}
</script>