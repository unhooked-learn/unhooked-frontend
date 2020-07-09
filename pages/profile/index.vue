<template>
  <div>
    <header class="text-gray-100">
      <div class="py-4 text-center bg-gray-800">
        <div class="absolute top-0 right-0">
          <UHAccessibilityButton to="/profile/settings">
            <div class="w-12 p-2 md:p-0">
              <font-awesome-icon icon="pen" class="pt-2 fa-2x" />
            </div>
          </UHAccessibilityButton>
        </div>

        <div class="absolute top-0 left-0">
          <UHAccessibilityButton to="/profile/imprint">
            <div class="flex items-baseline w-12 p-2 ml-2 md:p-0">
              <font-awesome-icon icon="info" class="pt-2 fa-2x" /> 
              <div class="text-md">{{ $t('pages.imprint.buttonText') }}</div> 
            </div>
          </UHAccessibilityButton>
        </div>

        <div class="flex justify-center">
          <div class="mt-3">
            <font-awesome-icon icon="user-circle" class="w-32 fa-7x" />
          </div>
        </div>

        <h2 class="pt-3 font-semibold uppercase">{{ user.username }}</h2>

        <h4 class="mb-3 text-xs">
          {{
          $t('pages.profile.active', { minutes: active.activeTime })
          }}
        </h4>
        <template v-if="user.registered">
          <nuxt-link
            v-if="user.loggedin"
            :to="localePath('/profile')"
            class="px-2 py-1 text-xs bg-gray-400 border-gray-800 rounded-full pill"
          >{{ $t('pages.auth.logout') }}</nuxt-link>
          <nuxt-link
            v-else
            :to="localePath('/auth/signin')"
            class="px-2 py-1 text-xs bg-gray-400 border-gray-800 rounded-full pill"
          >{{ $t('pages.auth.signin') }}</nuxt-link>
        </template>
        <template v-else>
          <nuxt-link
            :to="localePath('/auth/signup')"
            class="px-2 py-1 text-xs bg-gray-400 border-gray-800 rounded-full shadow-solid pill"
          >{{ $t('pages.auth.signup') }}</nuxt-link>
        </template>
      </div>
    </header>
    <main class="mb-16 bg-gray-100">
      <div class="relative z-0">
        <div class="absolute inset-0 bg-gray-800 h-1/2 -z-10"></div>
        <div class="flex justify-center">
          <div
            class="px-4 py-3 text-lg font-semibold text-center text-gray-700 bg-white rounded-md shadow-md"
          >
            <UHToast
              :text="$t('general.toast.gratulations',{points: user.totalScore})"
              :linkText="user.totalScore"
              type="success"
              icon="coins"
              :close="$t('general.modal.close')"
            />
            {{ $t('pages.profile.xp', { points: user.totalScore }) }}
          </div>
        </div>
      </div>
      <div class="px-4 mt-6">
        <h3
          class="font-semibold tracking-wider text-gray-600 uppercase text-md"
        >{{ $t('pages.profile.badges') }}</h3>
      </div>
      <transition
        enter-active-class="duration-700 ease-out transtition-all"
        leave-active-class="duration-700 ease-in transtition-all"
        enter-class="scale-75 opacity-0 "
        enter-to-class="scale-100 opacity-100 "
        leave-class="scale-100 opacity-100 "
        leave-to-class="scale-75 opacity-0 "
      >
        <div class="grid grid-cols-3 gap-4 px-2 mt-6 md:grid-cols-4 md:gap-8">
          <template v-if="$fetchState.pending">
            <UHBadgeLoadingState v-for="i in 21" :key="i" />
          </template>

          <UHBadge :key="idx" v-else v-for="(badge, idx) in badges" :badge="badge" />
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UHBadge from '@/components/profile/UHBadge'
import UHBadgeLoadingState from '@/components/profile/UHBadgeLoadingState'
import UHToast from '@/components/generics/UHToast'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'

export default {
  name: 'profile',
  fetchOnServer: false,
  fetchDelay: 1000,
  components: {
    UHBadge,
    UHBadgeLoadingState,
    UHToast,
    UHAccessibilityButton
  },
  computed: {
    ...mapGetters({
      user: 'profile/user',
      active: 'profile/active',
      badges: 'badge/badges'
    })
  },
  activated() {
    // Call fetch again if last fetch more than 5 minues ago
    if (this.$fetchState.timestamp <= Date.now() - 1000 * 60 * 5) {
      this.$fetch()
    }
  },
  async fetch() {
    await this.$store.dispatch('badge/fetchBadges')
    await this.$store.dispatch('profile/fetch')
    // await this.user()
  },
  methods: {
    ...mapActions({
      // user: 'profile/fetch'
    }),
    showMinutes(timestamp) {
      return Math.floor((Date.now() - timestamp) / 1000 / 60)
    }
  }
}
</script>
