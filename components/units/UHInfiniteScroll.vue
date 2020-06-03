<template>
    <div>
        <!-- component -->
        <div v-for="item in items" :key="item.id" class="grid grid-cols-1 gap-6 px-4 my-6 md:px-6 lg:px-8">
            <slot name="item" v-bind:item="item"/>    
        </div>

        <div v-if="items.length" v-observe-visibility="handleScrolledToBottom"></div>
    </div>
    
</template>

<script>
export default {
  name: 'UHUnitCard',
  props: {
      items: {
          required: true,
          type: Array
      }
  },
  data () {
    return {
        page:1,
    }  
  },
  methods: {
    handleScrolledToBottom(isVisible){
      if(!isVisible) {return}
      this.page++
      this.$emit('refetch', this.page)
    }
  }
}
</script>
