<template>
  <div class="">
    <header class="text-white">
      <div class="py-4 text-center  bg-gray-800" >
        <font-awesome-icon :icon="icon" class="fas fa-user-circle fa-7x"/>
        <h2 class="py-3 font-semibold">{{name}}</h2>
      </div>
      <div class="relative">
          <div class="absolute bg-gray-800 inset-0 h-1/2"></div>
        <div
          class="w-40 mx-auto z-10"
        >
          <div class= "text-center bg-gray-200 rounded px-4 py-1 text-lg font-semibold text-gray-700">
            XP {{score}}
          </div>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
export default {
  name: 'profile',
  props: {
    icon: {
      type: String,
      required: false,
      default: 'user-circle'
    },
    name: {
      type: String,
      required: false,
      default: 'No Name'
    },
    score: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>
