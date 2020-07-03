<template>
    <span
      class="flex self-center inline-block my-1 leading-5 tracking-wider text-gray-600"
    >{{text}}</span>
</template>

<script>
export default {
  name: 'UHFtbTextItem',
  props: {
    text: {
      type: String,
      required: true
    }
  },
}
</script>