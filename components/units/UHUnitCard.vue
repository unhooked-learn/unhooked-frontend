<template>
  <div class="w-64">
    <div
      class="min-w-full my-2 overflow-hidden text-white rounded-md shadow-md "
      :class="{ 'bg-gray-600 text-white': active, 'bg-white': !active }"
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
            <font-awesome-icon
              icon="check-circle"
              class="w-3 h-3 mr-1 text-green-500 fill-current"
            />
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
