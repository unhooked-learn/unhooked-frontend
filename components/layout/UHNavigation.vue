<template>
  <nav class="px-4 py-3 bg-white shadow-lg rounded-tl-md rounded-tr-md">
    <div class="flex justify-between">
      <UHNavButton to="/units" name="Units" icon="graduation-cap" />
      <UHNavButton to="/knowledge" name="Knowledge Base" icon="book" />
      <UHNavButton to="/profile" name="Profile" icon="user" />
    </div>
  </nav>
</template>

<script>
import UHNavButton from './UHNavButton'

export default {
  name: 'UHNavigation',
  components: {
    UHNavButton
  }
}
</script>
