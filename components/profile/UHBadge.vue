<template>
    <div>
        <div class="w-16 h-16 rounded-full bg-gray-800 text-center flex m-auto  mb-6 shadow-xl">
          <font-awesome-icon :icon="icon" class="fa-2x text-gray-100 m-auto"/>
        </div>
    </div>

</template>
<script>
export default {
  name: 'UHBadge',
  props: {
    icon: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {}
}
</script>