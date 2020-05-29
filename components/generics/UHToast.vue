<template>
  <a href="#" @click.prevent="showToast()">{{ text }}</a>
</template>

<script>
export default {
  name: 'UHToast',
  props: {
    text: {
      type: [String, Number],
      required: true
    },
    preText: {
      type: [String, Number],
      required: false,
      default: ''
    },
    postText: {
      type: [String, Number],
      required: false,
      default: ''
    },
    theme: {
      type: String,
      required: false,
      default: 'bubble'
    },
    position: {
      type: String,
      required: false,
      default: 'bottom-center'
    },
    duration: {
      type: Number,
      required: false,
      default: 3000
    },
    close: {
      type: String,
      required: false,
      default: ''
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    },
    fitToScreen: {
      type: Boolean,
      required: false,
      default: false
    },
    keepOnHover: {
      type: Boolean,
      required: false,
      default: true
    },
    icon: {
      type: String,
      required: false,
      default: 'egg'
    },
    type: {
      type: String,
      required: false,
      default: 'default'
    }
  },
  methods: {
    showToast() {
      this.$toasted.show(this.preText+this.text+this.postText, {
        theme: this.theme,
        position: this.position,
        duration: this.duration,
        fullWidth: this.fullWidth,
        fitToScreen: this.fitToScreen,
        keepOnHover: this.keepOnHover,
        icon: this.icon,
        type: this.type,
        action : {
          text : this.close,
          onClick : (e, toastObject) => {
            toastObject.goAway(0);
          }    
        }
      })
    }
  }
}
</script>

<style lang='scss'>
  .toasted-container {
    .toasted {
      @apply p-3 leading-5;
      
      & > svg:first-child {
        @apply mr-3 w-8 h-8;

      }

      .action {
        @apply text-white;
      }
    }
  }
</style>
