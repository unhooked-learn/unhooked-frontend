<template>
  <Master>
    <UHNavigation />
  </Master>
</template>

<script>
import UHNavigation from '@/components/layout/UHNavigation'
import Master from './master'

export default {
  name: 'LayoutDefault',
  components: {
    UHNavigation,
    Master
  }
}
</script>
