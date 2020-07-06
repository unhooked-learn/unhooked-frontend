<template>
  <a href="#" @click="selectUnit(unit)" class="w-64">
    <div
      class="min-w-full my-2 overflow-hidden text-white rounded-md shadow-md h-80"
      :class="{ 'bg-gray-600 text-white': active, 'bg-white': !active }"
    >
      <div class="flex justify-end object-cover aspect aspect-1/2">
        <img class="object-cover" :src="unit.mediaName" :alt="unit.name" />
        <div class="absolute w-8 h-8 pt-3 pr-3">
          <font-awesome-icon
            v-if="complete||!active"
            class="fa-1x"
            :class="{'text-green-400':complete, 'text-blue-400':!complete&&!active}"
            icon="circle"
          />
        </div>
      </div>

      <div class="p-4 leading-none">
        <h5
          class="flex justify-between mb-1 text-xs uppercase"
          :class="{ 'text-gray-500': !active, 'text-gray-300': active }"
        >
          {{$t('pages.course.module', {number:unit.orderId})}}
          <div
            class="px-2 py-1 font-medium text-white bg-white border rounded-full"
            :class="{ 'bg-blue-600 border-blue-500':!active&&!complete, 'bg-green-500 border-green-500':complete, 'text-black bg-white-600 border-white-500':active}"
          >
            <div class="flex-initial max-w-full text-xs font-normal leading-none">
              <div v-if="complete">{{$t('pages.course.unit.status.complete')}}</div>
              <div v-else-if="active">{{$t('pages.course.unit.status.active')}}</div>
              <div v-else>{{$t('pages.course.unit.status.new')}}</div>
            </div>
          </div>
        </h5>
        <h4
          class="text-lg"
          :class="{ 'text-gray-100': active, 'text-gray-700': !active }"
        >{{ unit.name }}</h4>
        <p
          class="mt-2 text-sm"
          :class="{ 'text-gray-100': active, 'text-gray-700': !active }"
        >{{ unit.excerpt }}</p>
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
