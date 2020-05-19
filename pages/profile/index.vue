<template>
  <div class="bg-gray-100">
    <header class="text-gray-100">
      <div class="py-4 text-center bg-gray-800">
        <div class="absolute top-5 right-5 ">
          <font-awesome-icon icon="pen" @click="showModal" />
        </div>
        <div class="absolute top-5 left-5 ">
          <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link> /
          <nuxt-link :to="switchLocalePath('de')">DE</nuxt-link>
        </div>

        <font-awesome-icon icon="user-circle" class="fa-7x" />
        <h2 class="py-3 font-semibold uppercase">{{ user.name }}</h2>
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
      <div class="flex flex-wrap px-2 mt-6">
        <UHBadge
          class="w-1/3"
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
