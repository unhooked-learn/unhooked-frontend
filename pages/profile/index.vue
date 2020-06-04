<template>
  <div>
    <header class="text-gray-100">
      <div class="py-4 text-center bg-gray-800">
        <div class="absolute top-5 right-5 ">
          <nuxt-link :to="localePath('/profile/settings')"
            ><font-awesome-icon icon="pen"
          /></nuxt-link>
        </div>
        <font-awesome-icon icon="user-circle" class="fa-7x" />
        <h2 class="pt-3 font-semibold uppercase">{{ user.name }}</h2>
        <h4 class="mb-3 text-xs">
          {{
            $t('pages.profile.active', { minutes: showMinutes(user.timestamp) })
          }}
        </h4>
        <template v-if="user.registered">
          <template v-if="user.loggedin">
            <nuxt-link
              :to="localePath('/profile')"
              class="px-2 py-1 text-xs bg-gray-400 border-gray-800 rounded-full pill"
              >{{ $t('pages.login.logout') }}</nuxt-link
            >
          </template>
          <template v-else>
            <nuxt-link
              :to="localePath('/auth/login')"
              class="px-2 py-1 text-xs bg-gray-400 border-gray-800 rounded-full pill"
              >{{ $t('pages.login.login') }}</nuxt-link
            >
          </template>
        </template>
        <template v-else>
          <nuxt-link
            :to="localePath('/auth/register')"
            class="px-2 py-1 text-xs bg-gray-400 border-gray-800 rounded-full pill"
            >{{ $t('pages.register.label') }}</nuxt-link
          >
        </template>
      </div>
    </header>
    <main class="mb-16">
      <div class="relative z-0">
        <div class="absolute inset-0 bg-gray-800 h-1/2 -z-10"></div>
        <div class="flex justify-center">
          <div
            class="px-4 py-1 text-lg font-semibold text-center text-gray-700 bg-gray-200 rounded-md"
          >
            <UHToast
              :preText="$t('general.toast.gratulations')"
              :text="user.score"
              :postText="$t('general.toast.type')"
              type="success"
              icon="coins"
              :close="$t('general.modal.close')"
            />
            {{ $t('pages.profile.xp', { points: user.score }) }}
          </div>
        </div>
      </div>
      <div class="px-4 mt-6">
        <h3
          class="font-semibold tracking-wider text-gray-600 uppercase text-md "
        >
          {{ $t('pages.profile.badges') }}
        </h3>
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

          <UHBadge
            :key="idx"
            v-else
            v-for="(badge, idx) in badges"
            :badge="badge"
          />
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHBadge from '@/components/profile/UHBadge'
import UHBadgeLoadingState from '@/components/profile/UHBadgeLoadingState'
import UHToast from '@/components/generics/UHToast'

export default {
  name: 'profile',
  //fetchOnServer: false,
  fetchDelay: 1000,
  components: {
    UHBadge,
    UHBadgeLoadingState,
    UHToast
  },
  computed: {
    ...mapGetters({
      user: 'profile/user',
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
  },
  methods: {
    showMinutes(timestamp) {
      return (Math.floor((Date.now()-timestamp)/1000/60))
    },
  }
}
</script>
