<template>
  <div class="bg-gray-100">
    <header class="text-gray-100">
      <div class="py-4 text-center bg-gray-800">
        <div class="absolute top-5 right-5 ">
          <nuxt-link :to="localePath('/profile/settings')"><font-awesome-icon icon="pen" /></nuxt-link> 
        </div>
        <font-awesome-icon icon="user-circle" class="fa-7x" />
        <h2 class="pt-3 font-semibold uppercase">{{ user.name }}</h2>
        <template v-if="user.registered">
          <template v-if="user.loggedin">
            <nuxt-link :to="localePath('/profile')" class="px-2 py-1 text-xs bg-gray-400 border-gray-800 rounded-full pill">{{ $t('pages.login.logout') }}</nuxt-link>
          </template>
          <template v-else>
            <nuxt-link :to="localePath('/auth/login')" class="px-2 py-1 text-xs bg-gray-400 border-gray-800 rounded-full pill">{{ $t('pages.login.login') }}</nuxt-link>
          </template>  
        </template>
        <template v-else>
          <nuxt-link :to="localePath('/auth/register')" class="px-2 py-1 text-xs bg-gray-400 border-gray-800 rounded-full pill">{{ $t('pages.register.label') }}</nuxt-link>
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
            {{ $t('pages.profile.xp') }} {{ user.score }}
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
      <div class="grid grid-cols-3 gap-4 px-2 mt-6">
        <UHBadge
          :key="idx"
          v-for="(achievement, idx) in achievements"
          :badge="achievement"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHBadge from '@/components/profile/UHBadge'

export default {
  name: 'profile',
  components: {
    UHBadge
  },
  computed: {
    ...mapGetters({
      user: 'profile/user',
      achievements: 'profile/achievements'
    })
  },
  methods: {
    showModal() {
      this.$modal.show('modal')
    },
    hideModal() {
      this.$modal.hide('modal')
    }
  }
}
</script>
