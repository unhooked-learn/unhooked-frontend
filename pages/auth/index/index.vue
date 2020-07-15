<template>
  <div>
    <h3
      class="text-xl text-center uppercase my-7"
      v-html="$t('pages.auth.welcomeBack', { username })"
    ></h3>

    <div
      v-if="loading"
      class="py-2 my-3 text-center text-green-800 bg-green-200 border border-green-700 rounded-lg"
    >todo refactor loading...</div>

    <UHButton
      @click="goToUnit"
      class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
    >{{$t('pages.auth.useThisUsername')}}</UHButton>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHButton from '@/components/generics/UHButton'

export default {
  name: 'AuthIndexIndex',
  layout: 'auth',
  components: {
    UHButton
  },

  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      username: 'profile/username'
    })
  },
  methods: {
    async goToUnit() {
      // update request header
      this.$axios.setHeader('username', this.username)

      // todo add loading animation
      this.loading = true
      // fetch userdetails
      await this.$store.dispatch('profile/fetch')
      this.loading = false

      // navigate to unit
      this.$router.push(
        this.localePath({
          name: 'units'
        })
      )
    }
  }
}
</script>