<template>
  <div >
    <modal :name="name" width="90%" height="70%" class="rounded-lg overflow-hidden">
      <div class="text-center text-gray-700 bg-gray-200 h-full flex-col flex justify-between p-4">
        <div class="">
          <div class="relative z-0">
            <div class="-m-4 absolute inset-0 bg-gray-600 h-3/5 -z-10 rounded-b-lg"></div>
            <span v-if="selectedBadge.active" class="absolute top-0 left-0">
            <font-awesome-icon
                icon="check-circle"
                class="fa-3x text-green-500"
            />
            </span>

            <span class="absolute top-0 right-0">
            <a href="#" @click.prevent="close">
            <font-awesome-icon
                icon="times"
                class="fa-lg text-white opacity-75"
            />
            </a>  
            </span>

            <div
              class="shadow-lg flex w-32 h-32 m-auto text-center bg-gray-200 rounded-full"
            >
            <font-awesome-icon
            :icon="selectedBadge.icon"
            class="m-auto text-gray-800 fa-5x"
            />
            </div>
          </div>
          <h1 class="py-3 font-semibold uppercase">{{selectedBadge.name}}</h1>
          <p class="mt-2 text-sm">{{selectedBadge.description}}</p>
        </div>
      
        <a href="#" @click.prevent="close" class="group relative flex justify-center py-2 px-4 border text-md leading-5 font-medium rounded-md text-grey-800 bg-grey-600 hover:bg-gray-500 focus:outline-none focus:border-gray-900 focus:shadow-outline-grey active:bg-grey-700 transition duration-150 ease-in-out">
          {{ $t('general.modal.close') }}
        </a>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UHModal',
  props: {
    name: {
      tvpe: String,
      required: false,
      default: 'modal'
    }
  },
  computed: {
    ...mapGetters({
      selectedBadge: 'selectedBadge'
    })
  },
  methods: {
    open() {
      this.$modal.show(this.name)
    },
    close() {
      this.$modal.hide(this.name)
    }
  },
  watch: {
    selectedBadge: {
      handler(newValue) {
        this.open()
      }
    }
  }
}
</script>
