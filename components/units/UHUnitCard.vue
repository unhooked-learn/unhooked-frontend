<template>
  <a href="#" @click="selectUnit(unit)" class="w-64">
    <div
      class="min-w-full my-2 overflow-hidden text-white rounded-md shadow-md "
      :class="{ 'bg-gray-600 text-white': active, 'bg-white': !active }"
    >
      <div class="flex justify-end object-cover aspect aspect-1/2">
        <img class="object-cover" :src="unit.imgurl" :alt="unit.heading">
          <font-awesome-icon  v-if="complete" class="absolute pt-3 pr-3 text-green-400 fa-2x" icon="circle" />
          <font-awesome-icon  v-else-if="!complete&&!active" class="absolute pt-3 pr-3 text-blue-400 fa-2x" icon="circle" />
        </img>  
      </div>

      <div class="p-4 leading-none">
        <h5
          class="flex justify-between mb-1 text-xs uppercase"
          :class="{ 'text-gray-500': !active, 'text-gray-300': active }"
        >module {{ unit.id }}          
        <div class="px-2 py-1 font-medium text-white bg-white border rounded-full" :class="{ 'bg-blue-600 border-blue-500':!active&&!complete, 'bg-green-500 border-green-400':complete, 'text-black bg-white-600 border-white-500':active}">
          <div class="flex-initial max-w-full text-xs font-normal leading-none">
            <div v-if="complete">Complete</div>
            <div v-else-if="active">OPEN</div>
            <div v-else>New</div>
          </div>
        </div>
        <!-- <div v-if="active" class="px-2 py-1 font-medium text-gray-700 bg-white border border-gray-600 rounded-full bg-white-100 ">
          <div class="flex-initial max-w-full text-xs font-normal leading-none">Open</div>
        </div>
        <div v-else class="px-2 py-1 font-medium bg-white bg-blue-100 border border-blue-300 rounded-full text-white-700 ">
          <div class="flex-initial max-w-full text-xs font-normal leading-none">Open</div>
        </div> -->
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
  </a>
</template>

<script>
import { mapActions } from 'vuex'

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
  computed: {},
  methods: {
    ...mapActions({
      selectUnit: 'units/selectUnit'
    })
  }
}
</script>
