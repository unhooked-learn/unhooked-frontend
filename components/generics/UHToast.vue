<template>
    <a href="#" @click="showToast()" @click.prevent="">{{text}}</a>      
</template>


<script>
export default {
  name: 'UHToast',
  props: {
    text: {
      type: [String, Number],
      required: true,
    },
    theme: {
      type: String,
      required: false,
      default: 'bubble'
    },
    position: {
      type: String,
      required: false,
      default: 'buttom-center'
    },
    duration: {
      type: Number,
      required: false,
      default: 5000
    },
  },

  methods: {
    showToast() {
      this.$toasted.show(this.text, 
      { 
	      theme: "bubble", 
	      position: "buttom-center", 
	      duration : 5000
      });
    }
  }
}
</script>
