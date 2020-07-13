<template>
  <UHModal name="delete-user" ref="modal">
    <template #cardHeading>
      <span>{{ $t('pages.settings.profile.delete') }}</span>
    </template>

    <template #body>
      <div class="px-4 mt-2">
        <h1 class="py-2 text-2xl font-semibold text-red-500 uppercase">
          {{ $t('pages.settings.profile.attention') }}
        </h1>
        <p class="text-lg text-gray-900">
          {{ $t('pages.settings.profile.text') }}
        </p>
      </div>
    </template>

    <template #footer="{close}">
      <div class="flex justify-between text-gray-800">
        <UHButton
          class="text-white bg-red-500 border-red-500"
          @click="delUser()"
        >
          {{ $t('pages.settings.profile.deleteButton') }}
        </UHButton>
        <UHButton @click="close()">
          {{ $t('general.modal.close') }}
        </UHButton>
      </div>
    </template>
  </UHModal>
</template>

<script>
import UHModal from '@/components/generics/UHModal'
import UHButton from '@/components/generics/UHButton'

export default {
  name: 'UHUserDeleteModal',
  components: {
    UHModal,
    UHButton
  }
}
</script>
