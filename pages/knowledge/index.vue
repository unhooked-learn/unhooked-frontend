<template>
  <div>
    <header class="px-4 pt-12 text-white bg-gray-800">
      <h3 class="font-semibold tracking-wider text-gray-400 uppercase text-md">
        Knowledge Base
      </h3>
    </header>
    <main class="mb-16">
      <div class="relative z-0 h-full pt-8 mb-10">
        <div class="absolute inset-0 bg-gray-800 h-1/6 -z-10"></div>

        <div class="mx-2">
          <div class="flex flex-wrap -mx-2">
            <div class="w-1/2 p-2" :key="n" v-for="n in 10">
              <div class="w-full h-32 rounded shadow-lg">
              <div class="min-w-full my-2 overflow-hidden text-white rounded-md shadow-md bg-gray-600 text-white">
                <div class="object-cover aspect aspect-1/2">
                  <img class="object-cover" src="" />
                </div>
                <div class="p-4 leading-none">
                  <h4 class="text-lg text-gray-100">
                    Title
                  </h4>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'page',
    enterClass: 'opacity-0 scale-70',
    enterToClass: 'opacity-100 scale-100',
    enterActiveClass: 'transition-all transtion-1000 ease-in',
    leaveClass: 'opacity-100 scale-100',
    leaveToClass: 'opacity-0 scale-70',
    leaveActiveClass: 'transition-all transtion-1000 ease-out'
  }
}
</script>
