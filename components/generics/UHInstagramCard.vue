<template>
  <div class="w-full max-w-xl px-4 py-4 mx-auto bg-white rounded-lg shadow-md">
    <div class="flex flex-row items-center justify-between py-2">
      <div class="flex flex-row items-center">
        <a
          href="#"
          class="flex flex-row items-center rounded-lg focus:outline-none focus:shadow-outline"
        >
          <img class="object-cover w-8 h-8 rounded-full" @error="imageLoadOnError" :src="image" />
          <p class="ml-2 text-base font-medium">{{ name }}</p>
        </a>
      </div>
    </div>
    <div class="mt-2">
      <div class="object-cover aspect aspect-1/2">
        <img class="object-cover w-full rounded-lg" :src="item.largeImageURL" />
      </div>
      <div class="flex flex-row items-center justify-end px-1 py-2">
        <button
          class="flex flex-row items-center rounded-lg focus:outline-none focus:shadow-outline"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-5 h-5"
          >
            <path
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span class="ml-1">{{ item.likes }}</span>
        </button>
      </div>
    </div>
    <div class="py-2">
      <p class="leading-snug">{{ item.tags }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UHInstagramCard',
  data() {
    return {
      name: '',
      image: ''
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    fakeData() {
      // generate a fake username and a fake avatar url
      this.name = this.$faker().internet.userName()
      this.image = this.$faker().image.avatar()
    },
    imageLoadOnError() {
      // regenerate fakedata on error
      this.fakeData()
    }
  },
  created() {
    this.fakeData()
  }
}
</script>
