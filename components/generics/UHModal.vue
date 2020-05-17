<template> 

<modal :name="name" width="90%">
  hello, world!
</modal>

</template>

<script>
export default {
    name: "UHModal",
    props: {
      name: {
        tvpe: String,
        required: false,
        default: 'modal'
      }
    }
}
</script>