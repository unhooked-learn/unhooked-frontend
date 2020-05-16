<template>
  <div
    class="w-48 overflow-hidden text-white rounded-md shadow-md"
    :class="{ 'bg-gray-600 text-white': active }"
  >
    <div class="object-cover aspect aspect-1/2">
      <img class="object-cover" :src="unit.imgurl" :alt="unit.heading" />
    </div>

    <div class="p-4 leading-none">
      <h5
        class="flex mb-1 text-xs uppercase"
        :class="{ 'text-gray-500': !active, 'text-gray-300': active }"
      >
        <span v-if="complete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-3 h-3 mr-1 text-green-500 fill-current "
          >
            <path
              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
            />
          </svg>
        </span>
        module {{ unit.id }}
      </h5>
      <h4
        class="text-lg"
        :class="{ 'text-gray-100': active, 'text-gray-700': !active }"
      >
        {{ unit.heading }}
      </h4>
      <p
        class="mt-2 text-sm"
        :class="{ 'text-gray-100': active, 'text-gray-700': !active }"
      >
        {{ unit.excerpt }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UHUnitCard',
  props: {
    unit: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    complete: {
      type: Boolean,
      default: false
    }
  },
  computed: {}
}
</script>
