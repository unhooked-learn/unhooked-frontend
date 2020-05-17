<template>
  <div class="">
    <header class="text-white">
      <div class="py-4 text-center bg-gray-800">
        <font-awesome-icon icon="user-circle" class="fa-7x" />
        <h2 class="py-3 font-semibold uppercase">{{ name }}</h2>
      </div>
    </header>
    <div class="relative z-0">
      <div class="absolute inset-0 bg-gray-800 h-1/2 -z-10"></div>

      <div class="flex justify-center">
        <div
          class="px-4 py-1 text-lg font-semibold text-center text-gray-700 bg-gray-200 rounded-md"
        >
          XP {{ score }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      name: 'john Doe',
      score: 200
    }
  }
}
</script>
