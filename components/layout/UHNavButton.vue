<template>
  <nuxt-link :to="to" v-slot="{ isActive, href, navigate }" exact>
    <a
      :href="href"
      @click="navigate"
      class="flex items-center px-4 py-2 rounded-full outline-none focus:shadow-outline focus:bg-blue-100"
      :class="{
        'bg-blue-100 text-blue-600': isActive,
        'text-gray-400 hover:text-gray-600': !isActive
      }"
    >
      <div class="w-5 h-5">
        <font-awesome-icon :icon="icon" class="fill-current" />
      </div>

      <p class="ml-2 text-sm text-blue-600 uppercase" v-if="isActive">{{ name }}</p>
    </a>
  </nuxt-link>
</template>
<script>
export default {
  name: 'UHNavButton',
  props: {
    to: {
      type: [Object, String],
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: 'cog'
    },
    name: {
      type: String,
      required: false,
      default: 'No Name'
    }
  }
}
</script>
