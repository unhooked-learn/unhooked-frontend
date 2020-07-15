<template>
  <section>
    <client-only>
      <UHUserDeleteModal />
    </client-only>
    <h3
      class="mt-4 text-2xl font-extrabold leading-9 text-center text-gray-900"
    >{{ $t('pages.settings.profile.label') }}</h3>

    <div class="mt-3">
      <UHButton
        v-if="!deletedOnboardingKey"
        class="flex items-center justify-between w-full pl-3 my-5 border-2 rounded-lg focus:shadow-outline-gray hover:bg-gray-900 hover:text-white"
        @click="resetOnboarding()"
      >
        {{ $t('pages.settings.profile.redoOnboarding') }}
        <font-awesome-icon icon="redo" class="w-5 p-1 md:p-0 fa-2x" />
      </UHButton>

      <div v-else>
        <div
          class="py-3 font-semibold text-center text-blue-700 bg-blue-200 rounded-md"
        >{{$t('pages.settings.profile.onboardingRevisit') }}</div>
      </div>
    </div>

    <UHButton
      class="flex items-center justify-between w-full pl-3 my-5 text-white bg-red-500 border-2 border-red-500 rounded-lg focus:shadow-outline-red focus:bg-red-600 focus:border-red-600 hover:bg-red-600 hover:border-red-600"
      @click="showModal()"
    >
      {{ $t('pages.settings.profile.delete') }}
      <font-awesome-icon icon="trash" class="w-5 p-1 md:p-0 fa-2x" />
    </UHButton>
  </section>
</template>

<script>
import UHButton from '@/components/generics/UHButton'
import UHUserDeleteModal from '@/components/generics/UHUserDeleteModal'

export default {
  name: 'UHProfileSettings',
  data() {
    return {
      deletedOnboardingKey: false
    }
  },
  components: {
    UHButton,
    UHUserDeleteModal
  },
  methods: {
    showModal() {
      this.$modal.show('delete-user')
    },
    resetOnboarding() {
      localStorage.removeItem('onboarded')
      this.deletedOnboardingKey = true
    },
    async delUser() {
      this.$router.push(this.localePath('auth-index'))
    }
  }
}
</script>