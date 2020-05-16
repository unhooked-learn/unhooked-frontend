<template>
  <nuxt-link :to="to" v-slot="{ isActive }">
    <div class="px-4 py-2" :class="{ 'bg-blue-100 text-blue-600': isActive }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="w-4 fill-current h4"
        :class="{ 'text-blue-600': isActive, 'text-gray-300': !isActive }"
      >
        <path
          d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
        />
      </svg>

      <p class="text-sm text-blue-600 uppercase " v-if="isActive">{{ name }}</p>
    </div>
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
    iconName: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false,
      default: 'Foo'
    }
  }
}
</script>
