<template>
  <div class="bg-gray-100">
    <header class="text-gray-100">
      <div class="py-4 text-center bg-gray-800">    
        <div class="absolute top-5 right-5 ">
          <font-awesome-icon icon="pen"/>
        </div>

        <font-awesome-icon icon="user-circle" class="fa-7x" />
        <h2 class="py-3 font-semibold uppercase">{{ user.name }}</h2>
      </div>
    </header>
    <div class="relative z-0">
      <div class="absolute inset-0 bg-gray-800 h-1/2 -z-10"></div>

      <div class="flex justify-center">
        <div
          class="px-4 py-1 text-lg font-semibold text-center text-gray-700 bg-gray-200 rounded-md"
        >
          XP {{ user.score }}
        </div>
      </div>
    </div>

    <div class="px-4 mt-6">
      <h3
        class="font-semibold tracking-wider text-gray-600 uppercase text-md "
      >
        Badges
      </h3>
    </div>
    <div class="px-2 mt-6 flex flex-wrap" >   
      <UHBadge class="w-1/3" :key="idx" v-for="(achivement, idx) in achivements" :icon="achivement.icon" :active="achivement.active"/>
    </div>

  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import UHBadge from '@/components/profile/UHBadge'

export default {
  name: 'profile',
  components: {
    UHBadge
  },
  computed: {
    ...mapGetters({
      user: 'profile/user',
      achivements: 'profile/achivements'
    })
  }
}
</script>
