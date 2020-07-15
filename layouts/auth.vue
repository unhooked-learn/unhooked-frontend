<template>
  <div class="h-screen font-sans text-base antialiased bg-gray-100">
    <div class="relative max-w-5xl mx-auto">
      <nuxt />
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LayoutAuth',
}
</script>
